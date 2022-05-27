const filmesJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()

app.use(express.json())

const getAll = (request, response) => {
    response.status(200).json([
        {
            "filmes": filmesJson
        }
    ])
}

const updateFilme = (request, response) => {
    const idRequest = request.params.id
    let filmeRequest = request.body

    let idEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)
    filmesJson.splice(idEncontrado, 1, filmeRequest)

     response.status(200).json([
        {
            'mensagem': 'atualizado com sucesso', filmesJson
        }

    ])

}



const updateTime = (request, response) => {
    const time = request.params.id

    let novoTime = request.body.running_time
    filmeFiltrado = filmesJson.find(filme => filme.id == time)
    filmeFiltrado.running_time = novoTime

    response.status(200).json([{
        'mensagem': 'o time do filme foi atualizado', filmeFiltrado
    }])
}

const deleteDiretor = (request, response) => {
    const diretorRequest = request.params.director.toLowerCase()

    const indexDiretor = filmesJson.findIndex(filme => filme.director.toLowerCase() == diretorRequest)
    filmesJson.splice(indexDiretor, 1)

    response.status(200).json([{
        'mensagem': 'filme deletado por diretor',
        'deletado': diretorRequest, filmesJson
    }])
}
const deleteFilme = (request, response) => {

    const idRequest = request.params.id

    const indexFilme = filmesJson.findIndex(filme => filme.id == idRequest)

    filmesJson.splice(indexFilme, 1)

    response.status(200).json([{
        "mensagem": "O filme foi deletado",
        "deletado": idRequest,
        filmesJson
    }])
}
module.exports = {
    getAll,
    updateFilme,
    updateTime,
    deleteDiretor,
    deleteFilme
}