// centralizando o conteudo da aplicaçao
//rota raiz
const express = require ('express')

// importe da continuação da rota de filmes
const filmesRoutes = require('./routes/filmesRoutes')

const app = express()// executo o express

app.use(express.json())//uso o bodyparser

//cria uma rota raiz(rota padrão)
app.use('/filmes', filmesRoutes)

//exportando para usar o server.js
module.exports = app
