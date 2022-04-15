'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send("Frans Junior Wangsa \n51019009 \nSistem Informasi \nhttps://m.facebook.com/login/?locale=id_ID")
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
