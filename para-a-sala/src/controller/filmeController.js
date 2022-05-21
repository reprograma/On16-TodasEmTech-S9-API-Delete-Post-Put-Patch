//acessando endereço do banco/json
const filmesJson = require('../models/filmes-barbie.json')

const express = require('express')

const app = express()//executar o express

app.use(express.json()) //fazendo o body parser

const getAll = (request, response) => {

    response.status(200).json([
        {
            "filmes": filmesJson
        }
    ])
}

//Atualizar o título do filme buscando pelo id
const updateTitle = (request, response) => {

    // guardo o id que foi enviado no request na constante idRequest (pq params? pq id é especifico e eu uso params para buscas especificas) 
    const idRequest = request.params.id

    // guardo o titulo que foi enviado no body da requisiçao (pq body? pq pra put, patch e post eu PRECISO passar um body)
    let novoTitulo = request.body.title

    // preciso filtrar o meu "banco de dados" (nesse caso é o Json mockado) para encontrar o id que o usuário digitou
    filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

    //Uma parte especifica do filme, no caso o título, será alterada com a nova informação enviada (o novo titulo)
    filmeFiltrado.title = novoTitulo

    //Mando uma response dizendo que está tudo correto e envio o filme com a alteração
    response.status(200).json([{
        "mensagem": "seu filme foi atualizado",
        filmeFiltrado
    }])
}

//Alterar todas as informações do filme buscando pelo id
const updateMovie = (request, response) => {

    const idRequest = request.params.id
    let filmeRequest = request.body

    //o Index Retorna o indice do array no primeiro elemento que for true
    let indexEncontrado = filmesJson.findIndex(filme => filme.id == idRequest)

    //Splice remove um elemento a partir do indexEncontrado. E no lugar dele é colocado a request passada (filmeRequest) 
    filmesJson.splice(indexEncontrado, 1, filmeRequest)

    //Mando uma response dizendo que está tudo correto e envio o filme com a alteração
    response.status(200).json([{

        "mensagem": "seu filme foi atualizado",
        filmesJson
        //se quiser que retorne apenas o filme alterado, teria que ter sido criada uma variavel em filmesJson.splice
    }])
}

//Deletar um filme por titulo
const deleteFilme = (request, response) => {

    //id que quero deletar
    const idRequest = request.params.id

    //Pegar o index(indice) do filme que será deletado
    const indexFilme = filmesJson.findIndex(filme => filme.id == idRequest)

    /*retira o filme do array de filmes a partir do index indicado
    array.splice(index, numero de coisas que serão deletadas, item que vou adicionar)*/
    filmesJson.splice(indexFilme, 1) //pra deletar não precisa adicionar nada

    response.status(200).json([{

        "mensagem": "O filme foi deletado",
        "deletado": idRequest,
        filmesJson
    }])
}

//Deletar um filme por titulo
const deleteFilmePorTitulo = (request, response) => {

    //titulo que quero deletar
    const titleRequest = request.query.title.toLowerCase()

    const indexTitle = filmesJson.findIndex(filme => filme.title == titleRequest)

    filmesJson.splice(indexTitle, 1)

    response.status(200).json([{

        "mensagem": "O filme foi deletado",
        "deletado": titleRequest,
        filmesJson
    }])
}

//exportando todas as funções do controller para serem usadas no filmesRoutes.js
module.exports = {
    getAll,
    updateTitle,
    updateMovie,
    deleteFilme,
    deleteFilmePorTitulo,

} 