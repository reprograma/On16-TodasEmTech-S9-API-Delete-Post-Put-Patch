const express = require('express')

const rotaFilmes = require('./routes/filmesRoutes')

const app = express() 

app.use(express.json())

app.use('/filmes', rotaFilmes)

module.exports = app