///centralizando o conteúdo da aplicação - Rota raiz
const express = require('express') //importando o express

//importe da continuação das rotas de filmes
const filmesRoutes = require("./routes/movieRoutes")

//executo o express
const app = express() 

//uso o bodyparser
app.use(express.json()) 

app.use("/filmes", filmesRoutes)

module.exports = app 