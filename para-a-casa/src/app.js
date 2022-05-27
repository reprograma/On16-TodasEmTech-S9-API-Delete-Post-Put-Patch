
// centralizando a pasta raiz

const express = require('express')// importando do express
const filmesRoutes = require('./routes/filmesRoutes')// import da continuação de routes
const app = express()// executo o expreess


app.use(express.json())// uso o bodyparser

// criar rota raiz
app.use('/filmes', filmesRoutes)

module.exports = app

// centralizando a pasta raiz

