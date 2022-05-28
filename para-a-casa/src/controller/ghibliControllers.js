const ghibliJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()

app.use(express.json())

const getAll = (request, response) => {

    response.status(200).json([
        {
            "ghibli": ghibliJson
        }
    ])

}

const dataUpdate = (request, response) => {

    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexFound = ghibliJson.findIndex(filme => filme.id == idRequest)

    ghibliJson.splice(indexFound, 1, filmeRequest)


    response.status(200).json([{
        "message": "Seu filme foi atualizado",
        ghibliJson
    }])
}

const titleUpdate = (request, response) => {

    const idRequest = request.params.id
    let newTitle = request.body.title
    filteredFilm = ghibliJson.find(filme => filme.id == idRequest)
    filteredFilm.title = newTitle
    response.status(200).json([{

        "mensagem": "seu titulo foi atualizado",
        ghibliJson

    }])
}

const runningTimeUpdate = (request, response) => {

    const idRequest = request.params.id
    let newRunningTime = request.body.running_time
    filteredFilm = ghibliJson.find(filme => filme.id == idRequest)
    filteredFilm.running_time = newRunningTime
    response.status(200).json([{

        "mensagem": "Duração do filme atualizada",
        ghibliJson

    }])

}

const deleteById = (request, response) => {

    const idRequest = request.params.id
    const indiceFilme = ghibliJson.findIndex(filme => filme.id == idRequest)

    ghibliJson.splice(indiceFilme, 1)

    response.status(200).json([{
        "message": "Filme deletado",
        "deletado": idRequest,
        ghibliJson
    }])
}

const deleteByDirector = (request, response) => {

    const directorRequest = request.query.director
    const filteredDirectors = ghibliJson.filter(filme => filme.director.includes(directorRequest));

    for (indice = 0; indice < filteredDirectors.length; indice++) {
        console.log(indice, ghibliJson[indice])

        const index = ghibliJson.indexOf(filteredDirectors[indice]);
        ghibliJson.splice(index, 1);
    }

    response.status(200).json([{
        "message": "Filmes deletados",
        "deletado": directorRequest,
        ghibliJson
    }])

}


module.exports = {
    getAll,
    dataUpdate,
    titleUpdate,
    runningTimeUpdate,
    deleteById,
    deleteByDirector
}