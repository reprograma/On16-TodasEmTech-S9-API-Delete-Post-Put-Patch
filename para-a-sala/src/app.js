// Neste arquivo estamos centralizando o 
// conteúdo da aplicação.
// [Rota raiz]:

const express = require("express") // Importando Express


// Importe da continuação das rotas de filmes
const filmeRoutes = require("./routes/filmeRoutes.js")

const app = express() // Aqui executamos o Express

app.use(express.json()) // uso do body parser | convertendo dados em JSON

// Criando uma rota raiz "/filmes"
app.use("/filmes", filmeRoutes)

// Exportando para usar o server.js
module.exports = app