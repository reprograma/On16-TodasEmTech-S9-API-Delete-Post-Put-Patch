//centralizando o conteúdo da aplicação - Rota raiz
const express = require('express') //importando o express

//importe da continuação das rotas de filmes
const filmesRoutes = require("./routes/filmeRoutes")

//executo o express
const app = express() 

//uso o bodyparser
app.use(express.json()) 

//criar uma rota raiz
app.use("/filmes", filmesRoutes)

//exportando para usar o server.js
module.exports = app 