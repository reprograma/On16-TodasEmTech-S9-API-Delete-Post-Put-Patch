//centralizando o conteúdo da aplicação - Rota raiz
const express = require('express') //importando o express

//importe da continuação das rotas de filmes
const GhibliRoutes = require("./routes/GhibliRoutes")

//executo o express
const app = express() 

//uso o bodyparser
app.use(express.json()) 

//criar uma rota raiz
app.use("/Ghibli/GhibliFilms", GhibliRoutes)

//exportando para usar o server.js
module.exports = app 