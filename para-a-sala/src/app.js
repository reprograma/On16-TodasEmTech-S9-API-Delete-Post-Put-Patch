const express = require('express') //importando o express

const filmesRoutes = require("./routes/filmeRoutes")

const app = express ()// executo o express

app.use(express.json())// uso o bodyparser

// criar uma rota raiz
app.use("/filmes", filmesRoutes)

module.exports = app