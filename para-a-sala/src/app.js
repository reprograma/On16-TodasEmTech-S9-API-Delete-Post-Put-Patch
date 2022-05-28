//centralizando o conteudo da aplicação
//rota raiz

const express = require("express")//importando o express

//importe da continuação das rotas de filmes
const filmesRoutes = require("./routes/filmeRoutes")

const app = express()//executa o express

app.use(express.json())//uso o bodyparser

//criar uma rota raiz
app.use("/filmes", filmesRoutes)

//exportando para usar o server.js
module.exports = app



























// // centralizando o conteudo da aplicacao
// // rota raiz
// const express = require("express") //importando o express

// //importe da continuacao das rotas de filmes
// const filmesRoutes = require("./routes/filmeRoutes")

// const app = express() // executo o express

// app.use(express.json()) // uso o bodyparser

// // criar uma rota raiz
// app.use("/filmes", filmesRoutes)

// // exportando para usar o server.js
// module.exports = app
