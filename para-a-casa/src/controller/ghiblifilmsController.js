const ghiblifilmsJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()

app.use(express.json())

const getAll = (request, response) => {

    response.status(200).json([
    {
      "filmes": ghiblifilmsJson
    
}])

}



const updateRunningTime = (request, response) =>{

    const idRequest = request.params.id

    const novaDuracao = request.body.running_time

    filmeFiltrado = ghiblifilmsJson.find(filme => filme.id == idRequest)

    filmeFiltrado.running_time = novaDuracao

    response.status(200).json([{
        "message": "Olá, seu filme foi atualizado",
        filmeFiltrado
    }])
}


const updateMovie = (request, response) => {
    const idRequest = request.params.id
    const filmeRequest = request.body

    const indexEncontrado = ghiblifilmsJson.findIndex(filme => filme.id == idRequest)

    ghiblifilmsJson.splice(indexEncontrado, 1, filmeRequest)
    
    response.status(200).json([{
      "message": "Filme atualizado",
      ghiblifilmsJson
        
    }])
}


const deleteFilme = (request, response) => {
    
    const idRequest = request.params.id
    const indiceFilme = ghiblifilmsJson.findIndex(filme => filme.id == idRequest)

    response.status(200).json([{
        "message": "Filme deletado",
        "deletato": idRequest,
        ghiblifilmsJson
           
    }])
}


const deleteDiretorFilme = (request, response) => {

    const idRequest = request.params.diretor.toLowerCase()
    
    const indiceFilme = ghiblifilmsJson.findIndex(filme => filme.diretor.toLowerCase() == idRequest)
    ghiblifilmsJson.splice(indiceFilme, 1)

    response.status(200).json([{
        "message":"Seu filme foi deletado",
        "deletado": idRequest,
        ghiblifilmsJson        
   
    }])
}


module.exports = {
    getAll,
    updateRunningTime,
    updateMovie,
    deleteFilme,
    deleteDiretorFilme,
}