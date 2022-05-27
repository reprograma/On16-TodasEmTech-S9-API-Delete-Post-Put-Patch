//centralizando o conteúdo da aplicação
// rota raiz

const express = require('express') //importando o express

const filmesRoutes = require('./routes/filmeRoutes') //import da continuação das rotas de filmes

const app = express() //executo o express

app.use(express.json()) //executando o bodyparser

//criar uma rota raiz
app.use('/filmes', filmesRoutes)

module.exports = app //exportando para usar o server.js


