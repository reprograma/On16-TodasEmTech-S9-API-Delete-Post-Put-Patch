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

const alterarDados = (request, response) => {

    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexEncontrado = ghibliJson.findIndex(filme => filme.id == idRequest)

    ghibliJson.splice(indexEncontrado, 1, filmeRequest)


    response.status(200).json([{
        "message": "filme atualizado",
        ghibliJson
    }])
}

const updateTitle = (request, response) => {

    const idRequest = request.params.id
    let novoTitulo = request.body.title
    filmeFiltrado = ghibliJson.find(filme => filme.id == idRequest)
    filmeFiltrado.title = novoTitulo
    response.status(200).json([{

        "mensagem": "seu titulo foi atualizado",
        ghibliJson

    }])
}

const alterarDuracao = (request, response) => {

    const idRequest = request.params.id
    let novaDuracao = request.body.running_time
    filmeFiltrado = ghibliJson.find(filme => filme.id == idRequest)
    filmeFiltrado.running_time = novaDuracao
    response.status(200).json([{

        "mensagem": "seu filme foi atualizado",
        ghibliJson

    }])

}

const deletaPorId = (request, response) => {

    const idRequest = request.params.id
    const indiceFilme = ghibliJson.findIndex(filme => filme.id == idRequest)

    ghibliJson.splice(indiceFilme, 1)

    response.status(200).json([{
        "message": "Filme deletado com sucessoooo!",
        "deletado": idRequest,
        ghibliJson
    }])
}

const deletePorDiretor = (request, response) => {

    const directorRequest = request.query.director
    const diretoresFiltrados = ghibliJson.filter(filme => filme.director.includes(directorRequest));

    for (indice = 0; indice < diretoresFiltrados.length; indice++) {
        console.log(indice, ghibliJson[indice])

        const index = ghibliJson.indexOf(diretoresFiltrados[indice]);
        ghibliJson.splice(index, 1);
    }

    response.status(200).json([{
        "message": "Filmes deletados com sucessooooo!",
        "deletado": directorRequest,
        ghibliJson
    }])

}


module.exports = {
    getAll,
    alterarDados,
    updateTitle,
    alterarDuracao,
    deletaPorId,
    deletePorDiretor

}
