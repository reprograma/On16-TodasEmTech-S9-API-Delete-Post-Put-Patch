// Acessando endereço do banco/json
const filmesJson = require('../models/filmes-barbie.json')
const express = require('express')
const {
    response,
    request
} = require('../app')
const app = express() // Executando express

app.use(express.json()) // Fazendo body parser

const getAll = (request, response) => {

    response.status(200).json([{

        "filmes": filmesJson
    }])
}


// declaro minha constante de atualizar o titulo do filme
const updateTitle = (request, response) => {

    // guardo o id que foi enviado no request na constante idRequest (params usado para buscas especificas)
    const idRequest = request.params.id
    // guardo o titulo que foi enviado no body da requisição (para put , patch e post precisamos passar um body)
    let novoTitulo = request.body.title

    // Agora preciso filtrar o meu "banco de dados" para encontrar o id que a pessoa digitou
    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)
    // depois disso, o meu filme a parte especifica do titulo será alterada pelo novo titulo que foi enviado
    filmeFiltrado.title = novoTitulo

    // Depois disso tudo, mando uma response dizendo que ta tudo ok e envio o filme com a alteração
    response.status(200).json([{

        "mensagem": "seu filme foi atualizado",
        filmeFiltrado

    }])

}

// Aplicando lógica da rota de PUT
const updateMovie = (request, response) => {

    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)

    // O que esta sendo feito? [splice] -> Método para substituição de array
    // Estamos removendo UM elemento a partir de INDEX ENCONTRADO, e add o FILME REQUEST no lugar.
    filmesJson.splice(indexEncontrado, 1, filmeRequest)

    response.status(200).json([{
        "message": "filme atualizado",
        filmesJson
    }])
}


// Lógica para DELETE

const deleteFilme = (request, response) => {

    // id que quero deletar
    const idRequest = request.params.id

    // Pegar o indice do filme que vai ser deletado
    const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest)

    // retirar o filme da array de filmes a partir do indice que eu der
    // ARRAY.SPLICE( INDICE, NUMERO DE COISAS QUE VOU DELETAR, ITEM QUE VOU ADICIONAR)
    filmesJson.splice(indiceFilme, 1)

    response.status(200).json([{
        "message": "Filme deletado, mona",
        "deletado": idRequest,
        filmesJson
    }])
}


module.exports = {
    getAll,
    updateTitle,
    updateMovie,
    deleteFilme
}