import * as ts from 'typescript'

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
        //'C:/Users/kirill/Desktop/projects/codeSketch/server/node_modules/@types/node/index.d.ts'
    ],
    getScriptVersion: _ => `${sourceVersion++}`,
    getScriptSnapshot: (fileName) => {
        // TODO: fix this. This is a very hacky way of excluding browser api typings
        // to avoid getting more completions then we need
        return ts.ScriptSnapshot.fromString(singletonSource)
    },
    getCurrentDirectory: () => '.',
    getDefaultLibFileName: ts.getDefaultLibFilePath,
    trace: console.trace,
    error: console.error,
    useCaseSensitiveFileNames: () => true
}

let service = ts.createLanguageService(host)

export function execute(source: string) : string {
    singletonSource = source

    let output = service.getEmitOutput(sourceKey)
    if (!output || output.outputFiles.length === 0) {
        console.log('compile error')
        return 'compile error'
    }

    let jsSource = output.outputFiles[0].text

    let originalLog = console.log
    let logs = ''
    console.log = (message: string) => logs += message + '\n'

    eval(jsSource)
    console.log = originalLog

    return logs
}
 
export function completionsAt(source: string, position: number): ts.CompletionEntry[] {
    singletonSource = source

    let completions = service.getCompletionsAtPosition(sourceKey, position, undefined)
    if (!completions) { 
        return [] 
    }
    return completions.entries
}
