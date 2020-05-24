const express = require('express')
const app = express()

const { config } = require('dotenv')
config()

const port = 4444

app.get('/', (req, res) => res.send('ahoj'))

app.get('/env', (req, res) => res.send(process.env))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))