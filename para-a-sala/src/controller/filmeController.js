//roda toda a lógica da API
// acessando o endereço do banco/json
const filmesJson = require('../models/filmes-barbie.json')
const express = require('express')
const { request, response } = require('express')
const app = express() //executar o express

app.use(express.json())// fazendo o body parser

const getAll = (request, response) => {
    response.status(200).json([
        {
            'filmes': filmesJson
        }
    ])
}

const updateTitle = (request, response) => {

    const idRequest = request.params.id
    let novoTitulo = request.body.title 

    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    filmeFiltrado.title = novoTitulo
    response.status(200).json([{

        'mensagem': 'Seu filme foi atualizado',
        filmeFiltrado
    }])
}

const updateMovie = (request, response) => {

    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexEncontrado = filmesJson.findIndex(filme => filme.id ==idRequest)

    //O que isso está executando?
    // esta removendo UM elemento, a partir do INDEX ENCONTRADO, e adicionando o FILME REQUEST no lugar.
    filmesJson.splice(indexEncontrado, 1, filmeRequest)

    response.status(200).json([{
        'message': 'filme atualizado',
        filmesJson
    }])

}

const deleteFilme = (request, response) => {
    // id que quero deletar
    const idRequest = request.params.id

    //pegar o índice/index do filme que vai ser deletado
    const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest)

    //retira o filme da array de filmes a partir do índice q eu disser
    //ARRAY.SPLICE(INDICE, NUMERO DE COISAS QUE EU VOU DELETAR, ITEM QUE VOU ADICIONAR)
    filmesJson.splice(indiceFilme, 1)

    response.status(200).json([{
        "message": "filme deletado amore",
        "deletado": idRequest,
        filmesJson
    }])
}

//exportando todas as funções do controller para ser usada no filmesRoutes.js
module.exports = {
    getAll,
    updateTitle,
    updateMovie,
    deleteFilme
}