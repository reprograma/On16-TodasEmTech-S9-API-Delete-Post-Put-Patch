//Importações
const express = require('express')
const filmesRoutes = require('./routes/filmeRoute')
const app = express()
app.use(express.json()) //bodyparser

//rota raiz
app.use('/filmes', filmesRoutes)

module.exports = app