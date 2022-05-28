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

