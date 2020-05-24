const express = require('express')
const app = express()

const { config } = require('dotenv')
config()

const port = 4444

app.get('/', (req, res) => res.send('Hello World! 1'))

app.get('/env', (req, res) => res.send(process.env))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

//
const app2 = express()
const port2 = 4445

app2.get('/', (req, res) => res.send('Heldsewewewsewwedsdlo World! 2'))

app2.get('/env', (req, res) => res.send(process.env))

app2.listen(port2, () => console.log(`Example app listening atqqqq http://localhost:${port2}`))
