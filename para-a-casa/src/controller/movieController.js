//acessando endereço do banco/json
const ghibliMoviesJson = require('../models/ghiblifilms.json')

const express = require('express')

const app = express()

app.use(express.json()) 

const getAll = (request, response) => {

    response.status(200).json([
        {
            "movies" : ghibliMoviesJson
        }
    ])
}

const updateTitle = (request, response) => {

    const idRequest = request.params.id

    let newTitle = request.body.title

   movieFound = ghibliMoviesJson.find(filme => filme.id == idRequest)

   movieFound.title = newTitle

    response.status(200).json([{
        "mensagem": "seu filme foi atualizado",
        movieFound
    }])
}

const updateMovie = (request, response) => {

    const idRequest = request.params.id 
    let filmeRequest = request.body

    //o Index Retorna o indice do array no primeiro elemento que for true
    let indexEncontrado = ghibliMoviesJson.findIndex(filme => filme.id == idRequest)

    //Splice remove um elemento a partir do indexEncontrado. E no lugar dele é colocado a request passada (filmeRequest) 
    ghibliMoviesJson.splice(indexEncontrado, 1, filmeRequest)

    //Mando uma response dizendo que está tudo correto e envio o filme com a alteração
    response.status(200).json([{
        "mensagem": "seu filme foi atualizado",
        ghibliMoviesJson
        //se quiser que retorne apenas o filme alterado, teria que ter sido criada uma variavel em ghibliMoviesJson.splice
    }])
}

//Deletar um filme por id
const deleteFilme = (request, response ) => {

    //id que quero deletar
    const idRequest = request.params.id

    //Pegar o index(indice) do filme que será deletado
    const indexFilme = ghibliMoviesJson.findIndex( filme => filme.id == idRequest)

    //retira o filme do array de filmes a partir do index indicado
    //array.splice(index, numero de coisas que serão deletadas, item que vou adicionar)
    
    ghibliMoviesJson.splice(indexFilme, 1) //pra deletar não precisa adicionar nenhum item

    response.status(200).json([{
        "mensagem" : "O filme foi deletado",
        "deletado" : idRequest,
        ghibliMoviesJson
    }])
}

const deleteFilmePorTitulo = (request, response ) => {

    const titleRequest = request.params.title.toLowerCase()

    const indexTitle = ghibliMoviesJson.findIndex( filme => filme.title.toLowerCase() == titleRequest)

    ghibliMoviesJson.splice(indexTitle,1)

    response.status(200).json([{

        "mensagem" : "O filme foi deletado",
        "deletado" : titleRequest,
        ghibliMoviesJson
    }])
}

module.exports = {
    getAll,
    updateTitle,
    updateMovie,
    deleteFilme,
    deleteFilmePorTitulo,
}