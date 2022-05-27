const ghibliFilmes = require("../models/ghiblifilms.json")
const express = require("express")
const app = express()
app.use(express.json ())

const getAll = (request, response) => {
    response.status(200).json([
        {
            "ghibli": ghibliFilmes
        }
    ])
}

const alteraQuaseTudo = (request, response) => {
    const idRequest = request.params.id
    let filmeRequest = request.body
    let indexEncontrado = ghibliFilmes.findIndex(filme => filme.id == idRequest) //??

    ghibliFilmes.splice(indexEncontrado, 1, filmeRequest)

    response.status(200).json([
        {
            "message": "dados atualizados",
            ghibliFilmes
        }
    ])
   }

const alteraDuracao = (request, response) => {
    const idRequest = request.params.id
    let duracaoModificada = request.body.running_time

    filmeFiltrado = ghibliFilmes.find(filme => filme.id == idRequest)
    filmeFiltrado.running_time = duracaoModificada
    response.status(200).json([
        {
            "message": "Filme atualizado",
            ghibliFilmes
        }
    ])
    }
    
const deletaFilmePorId = (request, response)=>{
    const idRequest = request.params.title.toLowerCase()
    const indiceFilme = ghibliFilmes.findIndex(filme => filme.title.toLowerCase() == idRequest)
    ghibliFilmes.splice(indiceFilme, 1)
    
    response.status(200).json([
         {
            "message": "Filme deletado com sucesso",
            "deletada": idRequest,
            ghibliFilmes
            }
        ])
    }

const deletaFilmePorDiretor = (request, response)=>{
    const diretorRequest = request.params.title.toLowerCase()
    const indiceFilme = ghibliFilmes.findIndex(filme => filme.title.toLowerCase() == diretorRequest)
    ghibliFilmes.splice(indiceFilme, 1)
    
    response.status(200).json([
        {
            "message": "Filme deletado com sucesso",
            "deletada": diretorRequest,
            ghibliFilmes
        }
    ])
}


 module.exports = {
    getAll, 
    alteraQuaseTudo,
    alteraDuracao,
    deletaFilmePorId,
    deletaFilmePorDiretor
}