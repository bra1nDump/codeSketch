import * as ts from 'typescript'
import {spawn} from 'child_process'
import * as fs from 'fs'
import {join} from 'path'

let singletonSource = ''
let sourceVersion = 0
const sourceKey = 'clientSource.ts'

let host: ts.LanguageServiceHost = {
    getCompilationSettings: ts.getDefaultCompilerOptions,
    getScriptFileNames: () => [sourceKey],
    getScriptVersion: _ => `${sourceVersion++}`,
    getScriptSnapshot: _ => ts.ScriptSnapshot.fromString(singletonSource),
    getCurrentDirectory: () => '',
    getDefaultLibFileName: ts.getDefaultLibFilePath,
    log: console.log,
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

    let completions = service.getCompletionsAtPosition(sourceKey, 9, {})
    if (!completions) { 
        return [] 
    }
    return completions.entries
}

