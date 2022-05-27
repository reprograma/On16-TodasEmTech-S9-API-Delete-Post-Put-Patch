const filmesJson = require("../models/filmes-barbie.json")
const express = require("express")
const app = express() // executa o express

app.use(express.json()) //fazendo o body parser

const getAll = (request, response) => {
  
  response.status(200).json([
    {
      "filmes": filmesJson
    }
  ])
}

// fazendo o Patch:
// declaro minha constante de atualizar o titulo do filme
const updateTitle = (request, response) => {

  // guardo o id que foi enviado no request na constante idRequest(uso paramns pq id é especifico e unico)
  const idRequest = request.params.id
  // guardo o titulo que foi enviado no body da requisição
  let novoTitulo = request.body.title 

  // preciso filtrar o meu "banco de dados" para encontrar o id que a pessoa digitou
  filmeFiltrado = filmesJson.find(filme => filme.id == idRequest)

  // mando uma response dizendo q ta tudo OK 
  filmeFiltrado.title = novoTitulo

  response.status(200).json([
    {
      "mensagem": "seu filme foi atualizado",
      filmeFiltrado
    }
  ])

}

// fazendo o PUT:
const updateMovie = (request, response) => {

  const idRequest = request.params.id
  let filmeRequest = request.body

  let indexEncontrado = filmesJson.findIndex( filme => filme.id = idRequest)

  // remove um elemento a partir de index encontrado e adicionando o filme request no lugar
  filmesJson.splice(indexEncontrado, 1, filmeRequest)

  response.status(200).json([
    {
      "mensagem": "filme atualizado",
      filmesJson
    }
  ])

}

const deleteFilme = (request, response) => {

  const idRequest = request.params.id

  //pegar o indice (index) do filme que vai ser deletado
  const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest)

  //retira o filme da array de filmes a partir do indice que eu falar: array.splice(indice, numero de elementos q vou deletar, item q vou adicionar)
  //nesse caso não vou adicionar nada, mas apenas deletar.
  filmesJson.splice(indiceFilme, 1)

  response.status(200).json([
    {
      "mensagem": "filme deletado boneka",
      "deletado" : idRequest,
      filmesJson
    }
  ])

}

module.exports = {
  getAll,
  updateTitle,
  updateMovie,
  deleteFilme
}
