import * as express from 'express'
import {execute, completionsAt} from './utils'

let app = express()
app.use(express.json())
app.post('/run', async (req, res) => {
    console.log('POST /run')
    let stdout = await execute(req.body.source)
    res.send({ stdout: stdout })
})

app.post('/completions', (req, res) => {
    console.log('POST /completions')
    let {source, position} = req.body as {source: string, position: number}
    console.log(`source: ${source} \n, position: ${position}`)
    let completions = completionsAt(source, position)
    res.send({ completions: completions })
})

const port = 8000
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})