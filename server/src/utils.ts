import * as ts from 'typescript'
import {spawn} from 'child_process'
import * as fs from 'fs'
import {join} from 'path'

let singletonSource = ''
let sourceVersion = 0
const sourceKey = 'clientSource.ts'

let host: ts.LanguageServiceHost = {
    getCompilationSettings: ts.getDefaultCompilerOptions,
    getScriptFileNames: () => [
        sourceKey,
        // TODO: this should not even go into the file
        // this is just a quick work around to add node support instead of brwser stuff.
        // users should also be able to use things like child_process, fs and frields from node
        'C:/Users/kirill/Desktop/projects/codeSketch/server/node_modules/@types/node/index.d.ts'
    ],
    getScriptVersion: _ => `${sourceVersion++}`,
    getScriptSnapshot: (fileName) => {
        // TODO: fix this. This is a very hacky way of excluding browser api typings
        // to avoid getting more completions then we need
        if (fileName.indexOf('dom') > -1
            || fileName.indexOf('webworker') > -1
            || fileName.indexOf('scriphost') > -1) {
                return ts.ScriptSnapshot.fromString('');
        }

        if (fileName !== sourceKey) {
            return ts.ScriptSnapshot.fromString(
                fs.readFileSync(fileName).toString()
            )
        }
        return ts.ScriptSnapshot.fromString(singletonSource)
    },
    getCurrentDirectory: () => '.',
    getDefaultLibFileName: ts.getDefaultLibFilePath,
    trace: console.trace,
    error: console.error,
    useCaseSensitiveFileNames: () => true
}


let service = ts.createLanguageService(host)

export async function execute(source: string) : Promise<string> {
    singletonSource = source

    let output = service.getEmitOutput(sourceKey)
    if (!output || output.outputFiles.length === 0) {
        console.log('compile error')
        return 'compile error'
    }

    let dir = fs.mkdtempSync('codeSketch')
    let jsSourceFile = join(dir, 'compiledSource.js')
    let jsSource = output.outputFiles[0].text
    fs.writeFileSync(jsSourceFile, jsSource)
    
    let stdout = await new Promise<string>(resolve => {
        let stdout = ''
        let runtime = spawn('node', [ jsSourceFile ])
        runtime.stdout.on('data', (chunk => {
            console.log(`runtime stdout new chunk: ${chunk}`)
            stdout += chunk
        }))
        runtime.on('close', (code) => {
            console.log(`runtime closed all stdio with code ${code}`)
            resolve(stdout)
        })
    })

    fs.unlinkSync(jsSourceFile)
    fs.rmdirSync(dir)

    return stdout
}
 
export function completionsAt(source: string, position: number): ts.CompletionEntry[] {
    singletonSource = source

    let completions = service.getCompletionsAtPosition(sourceKey, position, undefined)
    if (!completions) { 
        return [] 
    }
    return completions.entries
}
