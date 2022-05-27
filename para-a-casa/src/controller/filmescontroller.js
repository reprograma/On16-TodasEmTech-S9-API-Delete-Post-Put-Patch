// AQUI VAI A MINHA LOGICA

const ghibliJson = require ('../models/ghiblifilms.json')
const express = require ('express')

const app = express()// executando o express

app.use(express.json())//fazendo o body parser

//ler todos os filmes

const getAll = (request, response) => {

    response.status(200).json([
        {
        "filmes" : ghibliJson
        }
    ])
}

//Alterar todas as informações do filme (PUT)
const updateMovie = (request, response) => {

    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexEncontrado = ghibliJson.findIndex(filme => filme.id == idRequest)

    ghibliJson.splice(indexEncontrado, 1, filmeRequest)

    response.status(200).json([{
        "mensagem":"seu filme foi atualizado",
        ghibliJson
        }])
}

//Alterar duração do filme (PATCH)

const updateRunningTime = (request, response) => {

    const idRequest = request.params.id
    let novaDuracao = request.body.running_time

    filmeFiltrado = ghibliJson.find(filme => filme.id == idRequest)

    filmeFiltrado.running_time = novaDuracao

    response.status(200).json([{
        "mensagem":"Seu filme foi atualizado",
        filmeFiltrado
    }])
}

// Deletar um filme por id (DELETE)

const deleteFilme = (request, response) => {

    const idRequest = request.params.id
    
    const indexFilme = ghibliJson.findIndex(filme => filme.id == idRequest)

    ghibliJson.splice(indexFilme, 1)

    response.status(200).json([{
        "mensagem":"Seu filme foi deletado",
        "deletado":idRequest,
        ghibliJson
    }])
}

//Delete filme por diretor (DELETE)

const deleteFilmePorDiretor = (request, response) => {
    
    const directorRequest = request.query.director

    const directorFiltrado = ghibliJson.filter(filme => filme.director.includes(directorRequest));

for ( i=0; i < directorFiltrado.length; i++) {
    console.log(i, ghibliJson[i])

    const index = ghibliJson.indexOf(directorFiltrado[i])
    ghibliJson.splice(index, 1);
}

response.status(200).json([{
    "mensagem": "diretores deletados",
    "deletado": directorRequest,
    ghibliJson
}])
}

module.exports = {
    getAll,
    updateMovie,
    updateRunningTime,
    deleteFilme,
    deleteFilmePorDiretor
}
