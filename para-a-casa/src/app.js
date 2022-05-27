const express = require("express") //importando o express

//importe da continuacao das rotas de filmes
const filmesRoutes = require("./routes/filmesRoutes")

const app = express() // executo o express

app.use(express.json()) // uso o bodyparser

// criar uma rota raiz
app.use("/filmes", filmesRoutes)

// exportando para usar no server.js

module.exports = app

