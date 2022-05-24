// Centralizando a aplicação - Rota raiz

const express = require('express') // importando o express
const filmesRoutes = require("./routes/filmesRoutes") // Importando continuação das rotas de filmes
const app = express() // executando o express

// Realizando o body parser - conversão de dados
app.use(express.json())

// Criação da Rota Raiz
app.use("/ghibliFilmes", filmesRoutes)

// Não esquecer de exportar para usar o server.js
module.exports = app