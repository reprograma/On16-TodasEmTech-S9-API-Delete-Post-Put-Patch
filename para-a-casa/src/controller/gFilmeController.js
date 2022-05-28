const express = require('express')
const { response } = require('../app')
//const { request, response } = require('../app')

//Permite acesso ao banco de dados ghiblifilms
const gFilmesJson = require('../models/ghiblifilms.json')

const app = express()
app.use(express.json()) //bodyparser

// //Teste de verificação. Retorna todos os filmes
const gAll = (request, response) => {
    response.status(200).json([
        {
            "filmes": gFilmesJson
        }
    ])
}

//Alterar todos os dados de um filme, com exceção do ID
const mudaFilme = (request, response) => {
    const idReq = request.params.id
    let gFilmeReq = request.body

    //Encontrando o filme pela ID
    let fEncontrado = gFilmesJson.findIndex(gFilme => gFilme.id == idReq)

    //Substituindo o filme com o gFilmeReq
    gFilmesJson.splice(fEncontrado, 1, gFilmeReq)

    //Mensagem de ok
    response.status(200).json([{
        "message": 'Filme Atualizado',
        gFilmesJson
    }])
}

//Muda duração do filme. Duração = running time
const mudaDuracao = (request, response) => {
    const idReq = request.params.id
    let novaDuracao = request.body.running_time
    gFilmeModificado = gFilmesJson.find(gFilme => gFilme.id == idReq)
    gFilmeModificado.running_time = novaDuracao

    response.status(200).json([{
        "message": 'Filme com nova Duração Atualizada com sucesso!',
        gFilmeModificado
    }])
}

//Deleta filme por id
const deleteByID = (request, response) => {
    const idReq = request.params.id
    const indexFilme = gFilmesJson.findIndex(gFilme => gFilme.id == idReq)
    gFilmesJson.splice(indexFilme, 1)
    response.status(200).json([{
        "message": `Filme de ID ${idReq} foi deletado`,
        "deletado": idReq,
        gFilmesJson
    }])

}

//Deleta filme por Diretor
const deleteByDirector = (request, response) => {
    const directorReq = request.query.director
    const indexFilme = gFilmesJson.findIndex(gFilme => gFilme.director == directorReq)
    gFilmesJson.splice(indexFilme, 1)
    response.status(200).json([{
        "message": `Filmes de Diretor ${directorReq} foram deletados`,
        "deletado": directorReq,
        gFilmesJson
    }])

}


//Permite que as funções aqui inseridas sejam chamadas em outro arquivo. 
// No caso, no arquivo gFilmeRoutes
module.exports = {
    gAll,
    mudaFilme,
    mudaDuracao,
    deleteByID,
    deleteByDirector
}