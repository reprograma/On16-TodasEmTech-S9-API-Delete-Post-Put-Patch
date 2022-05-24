/// acessando endereço do banco/json
const filmesJson = require("../models/filmes-barbie.json")
const express = require("express")

const app = express() // executar o express

app.use(express.json()) //fazendo o body parser

const getAll = (request, response) => {
    response.status(200).json([
        {
            "filmes": filmesJson
        }
    ])
}

// declaro minha constante de atualizar o titulo do filme
const updateTitle = (request, response) =>{

    // guardo o id que foi enviado no request na constante idRequest (pq params? pq id é especifico e eu uso params para buscas especificas) 
    const idRequest = request.params.id

    // guardo o titulo que foi enviado no body da requisiçao (pq body? pq pra put, patch e post eu PRECISO passar um body)
    let novoTitulo = request.body.title

    // preciso filtrar o meu ''banco de dados'' para encontrar o id que a pessoa digitou
    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    // depois disso, o meu filme a parte especifica do titulo será alterada pelo Novo Titulo que foi enviado
    filmeFiltrado.title = novoTitulo

    // depois disso tudo, mando uma response dizendo q ta tudo OK e envio o filme com a alteraçao
    response.status(200).json([{

        "message": "Seu filme foi atualizado",
        filmeFiltrado

    }])
}

const updateMovie = (request, response) => {
    
    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)

    //esta removendo um elemento(splice), a partir do indexEncontrado* e adiciona o filmeRequest* no lugar
    filmesJson.splice(indexEncontrado, 1, filmeRequest)

    response.status(200).json([{
        "message": "filme atualizado",
        filmesJson
    }])
}

// fazer com a prof
const deleteMovie = (request, response) => {
    
    //id que quero deletar
    const idRequest = request.params.id
    
    // pegar o indice(index) do filme que vai ser deletado
    const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest)

    //retira o filme da array de filmes a partir do indice que eu disser
    //ARRAY.SPLICE(indice, numero de coisas que vou deletar, item que vou adicionar *não colocar no delete*)
    filmesJson.splice(indiceFilme, 1)

    response.status(200).json([{
        "message": "Filme deletado",
        "deletado": idRequest,
        filmesJson
    }])
}

// exportando todas as funções do controller para ser usada no filmesRoutes.js
module.exports ={
    getAll,
    updateTitle,
    updateMovie,
    deleteMovie
}