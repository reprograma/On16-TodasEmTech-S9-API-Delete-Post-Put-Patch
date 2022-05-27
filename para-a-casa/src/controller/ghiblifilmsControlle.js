const ghiblifilmsJson = require('../models/ghiblifilms.json')

const express = require('express')
const { request, response } = require('../app')

const app = express()

app.use(express.json())

const getAll = (request,response) => {
    response.status(200).json([
        {
            "filmes":ghiblifilmsJson
        }
    ])
}

const updateTitle = (request,response) => {
    const idRequest = request.params.id
    let novoTitulo = request.body.title
    filmeFiltrado = ghiblifilmsJson.find(filme => filme.id == idRequest)
    filmeFiltrado.title = novoTitulo

    response.status(200).json([{
        "mensagem":"seu filme foi atualizado",
        filmeFiltrado
    }])
}
module.exports = {
    getAll,
    updateTitle
}