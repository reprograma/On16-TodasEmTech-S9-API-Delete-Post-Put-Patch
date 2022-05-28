//acessando endereço do banco/json
const filmesJson = require('../models/filmes-barbie.json') 

const express = require('express')
const app = express() //executar o expressar

app.use(express.json()) //fazendo o body parser

const getAll = (request, response) => {
    response.status(200).json([{
        "filmes": filmesJson
    }])
}

//declaro minha constante de atualizar o titulo do filme
const updateTitle = (request, response) => {

    //guardo o id que foi enviado no request na constante idRequest 
    const idRequest = request.params.id //request.params é usado apenas para coisas bem específicas, tipo id, que cada um tem um diferente
    //guardo o titulo que foi enviado no body da requisicao(pq body? pq pra put, patch e posy )
    let novoTitulo = request.body.title

    // preciso filtrar o meu ''banco de dados'' para encontrar o id que a pessoa digitou
    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    //// depois disso, o meu filme a parte especifica do titulo será alterada pelo Novo Titulo que foi enviado
    filmeFiltrado.title = novoTitulo

    // depois disso tudo, mando uma response dizendo q ta tudo OK e envio o filme com a alteraçao
    response.status(200).json([{
        "mensagem": "Seu filme foi atualizado",
        filmeFiltrado
    }])
}

const updateMovie = (request, response) => {

    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)

    // oq isso esta fazendo???
    // esta removendo UM elemento, a partir de iNDEX ENCONTRADO, e adicionando o FILME REQUEST no lugar.
    filmesJson.splice(indexEncontrado, 1, filmeRequest)

    response.status(200).json([{
        "message": "filme atualizado",
        filmesJson
    }])
}

const deleteFilme = (request, response) => {

    //id que quero deletar
    const idRequest = request.params.id

    //pegar o indice(index) do filme que vai ser deletado
    const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest)

    //método splice retira o filme da array de filmes a partir do indice que eu disser
    //array.splice: pegar o indice, numero de coisas e item que vou adicionar)
    filmesJson.splice(indiceFilme, 1) //não precisa colocar o que vou adicionar pq nao vou adicionar nada

    response.status(200).json([{
        "message": "Filme deletado com sucesso", 
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
