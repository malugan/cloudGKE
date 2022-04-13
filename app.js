'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Frans Junior Wangsa \n 51019009 \n Sistem Informasi')
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
