const filmesJson = require('../models/ghiblifilms.json')

const express = require('express')

const app = express()

app.use(express.json()) 

const getAll = (request, response) => {

    response.status(200).json([
        {
            "filmes" : filmesJson
        }
    ])
}

const updateTitle = (request, response) => {

    const idRequest = request.params.id

    let novoTitulo = request.body.title

   filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    filmeFiltrado.title = novoTitulo

    response.status(200).json([{
        "mensagem": "Seu filme foi atualizado!",
        filmeFiltrado
    }])
}

const updateMovie = (request, response) => {

    const idRequest = request.params.id 
    let filmeRequest = request.body

    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)

    filmesJson.splice(indexEncontrado, 1, filmeRequest)

    response.status(200).json([{
        "mensagem": "seu filme foi atualizado",
        filmesJson
        
    }])
}

const deleteFilme = (request, response ) => {

    
    const idRequest = request.params.id

    
    const indexFilme = filmesJson.findIndex( filme => filme.id == idRequest)
   
    filmesJson.splice(indexFilme, 1)

    response.status(200).json([{
        "mensagem" : "O filme foi deletado",
        "deletado" : idRequest,
        filmesJson
    }])
}


const deleteFilmePorTitulo = (request, response ) => {

    const titleRequest = request.params.title.toLowerCase()

    const indexTitle = filmesJson.findIndex( filme => filme.title.toLowerCase() == titleRequest)

    filmesJson.splice(indexTitle,1)

    response.status(200).json([{

        "mensagem" : "O filme foi deletado",
        "deletado" : titleRequest,
        filmesJson
    }])
}

module.exports = {
    getAll,
    updateTitle,
    updateMovie,
    deleteFilme,
    deleteFilmePorTitulo,

}