//Importações
const express = require('express')
const gFilmesRoutes = require('./routes/gFilmeRoutes')
const app = express()
app.use(express.json()) //bodyparser

//rota raiz
app.use('/gfilmes', gFilmesRoutes)

//possibilita uso do arquivo app em outros arquivos 
module.exports = app