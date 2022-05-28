const filmesJson = require('../models/ghiblifilms.json')

const express = require('express')

const app = express() //executando o express

app.use(express.json())

const getAll = (request, response) => {
    response.status(200).json ([{
        "filmes" : filmesJson
    }]) 
}

//declaração da const de alterar o tempo do filme
const updateRunningTime = (request, response) => {
        
    const idRequest = request.params.id //request.params é usado apenas para coisas bem específicas, tipo id, que cada um tem um diferente
    let novoTempo = request.body.running_time
   
    tempoFiltrado = filmesJson.find(filme => filme.id == idRequest)

    tempoFiltrado.running_time = novoTempo

    response.status(200).json([{
        "mensagem": "O tempo do seu filme foi atualizado",
        tempoFiltrado
    }])
}

//mudar todos os dados do filme
const updateMovie = (request, response) => {
    
    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexEncontrado= filmesJson.findIndex(filme => filme.id == idRequest)

    filmesJson.splice(indexEncontrado, 1, filmeRequest)

    response.status(200).json([{
        "mensagem": " Filme atualizado com sucesso!", 
        filmesJson
    }])
}

//deletar filme por diretor
const deleteFilmePorDiretor = (request, response) => {
    const diretorRequest = request.query.director

    const filtraDiretor = filmesJson.filter(filme => filme.director.includes(diretorRequest))

    for (i = 0; i < filtraDiretor.length; i++) {

        const index = filmesJson.indexOf(filtraDiretor[i])
        filmesJson.splice(index, 1)
    }
    
    response.status(200).json([{
        "mensagem": "O filme foi deletado com sucesso",
        "deletado": diretorRequest,
        filmesJson
    }])
}

//deletar filme por id
const deleteFilme = (request, response) => {
    
    const idRequest = request.params.id

    const indiceFilme = filmesJson.findIndex(filme => filme.id == idRequest)

    filmesJson.splice(indiceFilme, 1)

    response.status(200).json([{
        "mensagem": "Foi deletado com sucesso",
        "deletado": idRequest,
        filmesJson
    }])
}

module.exports = {
    getAll,
    updateMovie,
    deleteFilmePorDiretor,
    deleteFilme,
    updateRunningTime
}