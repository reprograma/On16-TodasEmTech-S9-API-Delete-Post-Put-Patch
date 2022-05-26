const filmesJson = require("../models/ghiblifilms.json")
const express = require("express")
const app = express()

app.use(express.json())

const getAll = (request, response) => {
    response.status(200).json([
    {    
        "filmes": filmesJson
    }
    ])
}

const updateTitle = (request, response) => {
    
    const idRequest = request.params.id
    let novoTitulo = request.body.title
    filmeFiltrado = filmesJson.find(filmes => filmes.id == idRequest)
    filmeFiltrado.title = novoTitulo
    response.status(200).json([{
        
        "mensagem": "Dados atualizados",
        filmesJson
}])



}

const updateMovie = (request, response) => {

    const idRequest = request.params.id
    let filmesRequest = request.body
    let indexEncontrado = filmesJson.findIndex(filmes => filmes.id ==idRequest)

    filmesJson.splice(indexEncontrado, 1, filmesRequest)

    response.status(200).json([{
       
        "mensagem": "Filme atualizado",
        filmesJson
}])
}

const deletaFilmeId = (request, response) => {
    const idRequest = request.params.id
    const indiceFilme = filmesJson.findIndex(filmes => filmes.id == idRequest)
    filmesJson.splice(indiceFilme, 1)

    response.status(200).json([{
        
        "mensagem": "Filme excluído",
        "deletado": idRequest,
        filmesJson
}])

}




module.exports = {
    getAll,
    updateTitle,
    updateMovie,
    deletaFilmeId,
}