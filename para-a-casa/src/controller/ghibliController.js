//acessando endereço do banco/json
const GhibliJson = require('../models/ghiblifilms.json')

const express = require('express')

//executar o express
const app = express()

//fazendo o body parser
app.use(express.json())


//Alterar todas as informações do filme buscando pelo id (PUT)
const updateGhibli = (request, response) => {

    const idRequest = request.params.id
    let ghibliRequest = request.body

    let indexEncontrado = GhibliJson.findIndex(Ggibli => ghibli.id == idRequest)

    ghibliJson.splice(indexEncontrado, 1, ghibliRequest)

    response.status(200).json([{
        "mensagem": "seu filme Ghibli foi atualizado",
        ghibliJson

    }])
}

//Atualizar a duração do filme buscando pelo id (PATCH)
const updateRunningTime = (request, response) => {

    const idRequest = request.params.id

    let newRunningTime = request.body.running_time

    ghibliFilter = ghibliJson.find(ghibli => ghibli.id == idRequest)

    ghibliFilter.running_time = newRunningTime

    response.status(200).json([{
        "mensagem": "seu filme Ghibli foi atualizado com sucesso",
        ghibliFilter
    }])
}

//Deletar um filme por id (DELETE)
const deleteGhibli = (request, response) => {

    const idRequest = request.params.id

    const indexGhibli = ghibliJson.findIndex(ghibli => ghibli.id == idRequest)

    ghibliJson.splice(indexFilme, 1) 

    response.status(200).json([{
        "mensagem": "O filme ghibli foi deletado com sucesso",
        "deletado": idRequest,
        ghibliJson
    }])
}

//Deletar um filme por diretor (DELETE)
const deleteByDirector = (request, response) => {

    const Request = request.params.director.toLowerCase()

    const indexDirector = ghibliJson.findIndex(ghibli => ghibli.director.toLowerCase() == directorRequest)

    ghibliJson.splice(indexDirector, 1)

    response.status(200).json([{

        "mensagem": "O filme foi deletado",
        "deletado": directorRequest,
        ghibliJson
    }])
}

//exportando todas as funções do controller para serem usadas no filmesRoutes.js
module.exports = {
    updateGhibli,
    updateRunningTime,
    deleteGhibli,
    deleteByDirector

}