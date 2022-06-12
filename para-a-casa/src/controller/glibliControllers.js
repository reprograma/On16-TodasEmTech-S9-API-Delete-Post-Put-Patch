
const gliFilmesJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express() //executar o express

app.use(express.json()) // fazendo o body parser

// Endpointer retornara todos os filmes
const getAll = (request, response) => {

    response.status(200).json([
        {
            "filmes": gliFilmesJson
        }
    ])

}

module.exports = {
    getAll
}
