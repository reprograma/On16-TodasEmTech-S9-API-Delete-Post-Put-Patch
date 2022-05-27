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

const updateMovie = (request,response) => {
    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexEncontrado = ghiblifilmsJson.findIndex(filme => filme.id==idRequest)
    ghiblifilmsJson.splice(indexEncontrado,1,filmeRequest)
    response.status(200).json([{
        "mensagem":"seu filme foi encontardo",
        ghiblifilmsJson
    }])
}

module.exports = {
    getAll,
    updateTitle,
    updateMovie
}