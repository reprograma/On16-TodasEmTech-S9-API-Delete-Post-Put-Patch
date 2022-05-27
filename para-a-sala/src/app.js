const express  = require("express")
const filmesRoutes = require("./routes/filmeRoutes")
const app = express()

app.use(express.json())

//criar uma rota raiz
app.use("/filmes", filmesRoutes)

//exportando para usar o server.js
module.exports = app
