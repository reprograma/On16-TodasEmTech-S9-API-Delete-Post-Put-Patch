//centralizando o conteúdo da aplicação - Rota raiz

const express = require('express') //importando o express

//importe da continuação das rotas de filmes
const filmesRoutes = require("./routes/filmeRoutes")

const app = express() //executo o express

app.use(express.json()) //uso o bodyparser

//criar uma rota raiz
app.use("/filmes", filmesRoutes)

module.exports = app //exportando para usar o server.js
