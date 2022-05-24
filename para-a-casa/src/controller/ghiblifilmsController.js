const ghiblifilmsJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express() 

app.use(express.json())

const getAll = (request, response) => {

    response.status(200).json([
        {
            "filmes": ghiblifilmsJson
        }
    ])

}


const updateRunningTime = (request, response) => {

    
    const idRequest = request.params.id
   
    let novaDuracao = request.body.running_time

    
    filmeFiltrado = ghiblifilmsJson.find(filme => filme.id == idRequest)

    
    filmeFiltrado.running_time = novaDuracao

    
    response.status(200).json([{

        "mensagem": "seu filme foi atualizado",
        filmeFiltrado

    }])
}

const updateMovie = (request, response) => {

    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexEncontrado = ghiblifilmsJson.findIndex(filme => filme.id == idRequest)

    ghiblifilmsJson.splice(indexEncontrado, 1, filmeRequest)

    response.status(200).json([
        {
            "message": "filme atualizado",
            ghiblifilmsJson
        }
    ])
}

const deleteFilme = (request, response) => {
    

    const idRequest = request.params.id
    
   
    const indiceFilme = ghiblifilmsJson.findIndex(filme => filme.id == idRequest)
    
    
    ghiblifilmsJson.splice(indiceFilme, 1)
    
    response.status(200).json([{
        "message": "filme deletado",
        "deletado": idRequest,
        ghiblifilmsJson
    }])

    }

    const deleteFilmePorDiretor = (request, response)=>{
      
        const idRequest = request.params.director.toLowerCase()
    
        
        const indiceFilme = ghiblifilmsJson.findIndex(filme => filme.director.toLowerCase() == idRequest)
    
        
        ghiblifilmsJson.splice(indiceFilme, 1)
    
        response.status(200).json([
            {
                "message": "filme deletado com sucesso",
                "deletada": idRequest,
                ghiblifilmsJson
            }
        ])
    }
    


module.exports = {
    getAll,
    updateRunningTime,
    updateMovie,
    deleteFilme,
    deleteFilmePorDiretor
}
