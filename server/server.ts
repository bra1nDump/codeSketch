import * as express from 'express'

import * as fs from 'fs'
import * as vm from 'vm'
import {spawnSync, spawn} from 'child_process'

let app = express()
app.use(express.json())
app.post('/run', async (req, res) => {
    console.log('POST /run')
    var {source} = req.body

    let sourceFile = './source.ts'
    fs.writeFileSync(sourceFile, source)

    let sourceCompiled = './source.js'
    spawnSync('tsc.cmd', [
        '--outFile', sourceCompiled,
        sourceFile
    ])
    console.log(`client TypeScript compiled -> ${sourceCompiled}`)

    let stdout = await new Promise<string>(resolve => {
        let stdout = ''
        let runtime = spawn('node', [ sourceCompiled ])
        runtime.stdout.on('data', (chunk => {
            console.log(`runtime stdout new chunk: ${chunk}`)
            stdout += chunk
        }))
        runtime.on('close', (code) => {
            console.log(`runtime closed all stdio with code ${code}`)
            resolve(stdout)
        })
    })
    
    res.send({ stdout: stdout })
})

app.listen(8000)