const express = require("express") 
const app = express() //guardei a constante express

const filmesRoutes = require("./routes/glibliRoutes")

app.use(express.json()) // body parser

// minha rota raiz do api
app.use("/filmes", filmesRoutes)

// forma como irei exportar este arquivo para usar o server.js
module.exports = app
