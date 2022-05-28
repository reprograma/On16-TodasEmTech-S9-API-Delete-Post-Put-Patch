const moviesJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()

app.use(express.json())

const getAll = (request, response) => {

    response.status(200).json([
        {
            "Movies" : moviesJson
        }
    ])
}

//aqui embaixo to fazendo um patch
const updateRunTime = (request, response) => {

    const idRequest = request.params.id
    
    let newDuration = request.body.running_time

    findMovie = moviesJson.find(movie=> movie.id == idRequest)

    findMovie.running_time = newDuration

    response.status(200).json([
        {

            "message": "seu filme foi atualizado com sucesso!",
            findMovie
        }
    ])
} 


const updateMovie = (request, response) => {

    const idRequest = request.params.id
    let movieRequest = request.body

    let indexMovie = moviesJson.findIndex(movie => movie.id == idRequest)

    moviesJson.splice(indexMovie, 1, movieRequest)

    response.status(200).json([
        {
            "message":"O filme foi atualizado.",
            moviesJson
        }
    ])
}

const deleteById = (request, response) => {

    const idRequest = request.params.id

    const indexMovie = moviesJson.findIndex(movie=> movie.id == idRequest)

    moviesJson.splice(indexMovie, 1)

    response.status(200).json([
        {
            "message": "O filme foi deletado com sucesso.",
            "deletado": idRequest,
            moviesJson
        }
    ])
}

const deleteByDirector = (request, response) => {

    const directorRequest = request.params.director.toLowerCase()

    const indexDirector = moviesJson.findIndex(movie => movie.director.toLowerCase() == directorRequest)

    moviesJson.splice(indexDirector, 1)

    response.status(200).json([
        {
            "message": "Diretor deletado com sucesso!",
            "deletado": directorRequest,
            moviesJson
        }
    ])
}


module.exports = {
    updateRunTime,
    getAll, 
    updateMovie,
    deleteById,
    deleteByDirector

    
}