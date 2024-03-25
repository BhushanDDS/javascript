require('dotenv').config()
console.log("hey js");

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/tweet', (req, res) => {
    res.send('LitCoderrrr')
})


app.listen(process.env.PORT, () => {
    console.log(`hehe ${port}`)
})

app.get('/login', (req, res) => {
    res.send('<h1>hello</h1>')
})