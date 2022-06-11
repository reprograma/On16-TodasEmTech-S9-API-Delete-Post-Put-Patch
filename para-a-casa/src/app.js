const express = require("express") 
const filmesRoutes = require("./routes/filmeRoutes")
const app = express() // guarda a const express

app.use(express.json()) // bodyparser

app.use("/filmes", filmesRoutes)
// rota raiz

// exportando para usar o server.js
module.exports = app