import * as express from 'express'

let app = express()
app.use(express.json())
app.post('/run', (req, res) => {
    console.log(req.body)
    res.send({ output: 'console outputs this' })
})

app.listen(8000)