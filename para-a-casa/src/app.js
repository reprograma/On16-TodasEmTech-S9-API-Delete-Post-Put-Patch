const express = require("express") 
const app = express() //guardei a constante express

const myGhiRoutes = require("./routes/myGhibliRoutes")

app.use(express.json()) // body parser

// minha rota raiz do api
app.use("/filmes", myGhiRoutes)

// forma como irei exportar este arquivo para usar o server.js
module.exports = app
