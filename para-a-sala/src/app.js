<<<<<<< HEAD
//centralizando o conteúdo da aplicação
//ROTA RAIZ

const express = require('express') //importando o express

//importe da continuação das rotas dos filmes
const filmeRoutes = require('./routes/filmeRoutes')

const app = express() //executo o express

app.use(express.json()) //uso o bodyparser

// criar uma rota raiz
app.use('/filmes', filmeRoutes)

//exportando para usar o server.js
module.exports = app

=======
// centralizando o conteudo da aplicacao
// rota raiz
const express = require("express") //importando o express

//importe da continuacao das rotas de filmes
const filmesRoutes = require("./routes/filmeRoutes")

const app = express() // executo o express

app.use(express.json()) // uso o bodyparser

// criar uma rota raiz
app.use("/filmes", filmesRoutes)

// exportando para usar o server.js
module.exports = app
>>>>>>> 9bab97180b314b6790bfeb95a55a51e6524a59c7
