// centralizando o conteudo da aplicação
// rota raiz

const express = require("express") //importando o express

//importe da continuação das rotas de filmes
const filmesRoutes = require("./routes/filmeRoutes")

const app = express() // executo o express

app.use(express.json()) //uso o bodyparser

//criar rota raiz
app.use("/filmes", filmesRoutes)

// exportando para usar o server.js
module.exports = app