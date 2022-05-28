const filmesJson = require('../models/filmes-barbie.json')
const express = require('express')
//const { response } = require('../app')
const app = express()

app.use(express.json()) //bodyparser

const getAll = (request, response) => {
    response.status(200).json([
        {
            "filmes": filmesJson
        }
    ])
}

const updateTitle = (request, response) => {

    const idRequest = request.params.id //Identificar pelo ID sempre

    let novoTitulo = request.body.title //cria constante novo título que deve ser inserida no body

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest) //const que guarda o filme filtrado pela id

    filmeFiltrado.title = novoTitulo //const que guarda novo titulo

    response.status(200).json([{
        "message": "seu filme foi atualizado",
        filmeFiltrado //retorna filme filtrado pelo ID com novo título
    }])

}

const updateMovie = (request, response) => {

    const idRequest = request.params.id //Identificar pelo ID sempre

    let filmeRequest = request.body //cria constante todas as informações do filme que deve ser inserida no body

    let indexEncontrado = filmesJson.findIndex(filme => filme.di == idRequest)

    filmesJson.splice(indexEncontrado, 1, filmeRequest) //remove um elemento a partir
    //de index encontrado e adicionando o filmeRequest no lugar

    response.status(200).json([{
        "message": "filme foi atualizado",
        filmesJson //retorna filme filtrado pelo ID com novo título
    }])


}

const deleteFilme = (request, response) => {

    const idRequest = request.params.id //Identificar pelo ID sempre

    let indexFilme = filmesJson.findIndex(filme => filme.di == idRequest)

    filmesJson.splice(indexFilme, 1)

    response.status(200).json([{
        "message": "filme foi deletado",
        "deletado": idRequest,
        filmesJson //retorna filme filtrado pelo ID com novo título
    }])

}


module.exports = {
    getAll,
    updateTitle,
    updateMovie,
    deleteFilme
}