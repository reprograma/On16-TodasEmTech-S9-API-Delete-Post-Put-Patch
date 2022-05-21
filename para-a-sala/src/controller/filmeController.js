//acessando endereço do banco/json
const filmesJson = require('../models/filmes-barbie.json')

const express = require('express')

const app = express()//executar o express

app.use(express.json()) //fazendo o body parser

const getAll = (request, response) => {

    response.status(200).json([
        {
            "filmes" : filmesJson
        }
    ])
}

//exportando todas as funções do controller para serem usadas no filmesRoutes.js
module.exports = {
    getAll
}