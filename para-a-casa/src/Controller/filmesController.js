const ghibliJson = require('../models/ghiblifilms.json')
const express = require('express')
const app = express()

app.use(express.json())

const getAll = (request, response) => {

    response.status(200).json([
        {
            "ghibli": ghibliJson
        }
    ])

}

const alterarDados = (request, response) => {

    const idRequest = request.params.id
    let filmeRequest = request.body

    let indexEncontrado = ghibliJson.findIndex(filme => filme.id == idRequest)

    ghibliJson.splice(indexEncontrado, 1, filmeRequest)


    response.status(200).json([{
        "message": "Seu filme foi atualizado com sucesso",
        ghibliJson
    }])
}

const atualizarFilme = (request, response) => {

    const idRequest = request.params.id
    let novoTitulo = request.body.title
    filmeFiltrado = ghibliJson.find(filme => filme.id == idRequest)
    filmeFiltrado.title = novoTitulo
    response.status(200).json([{

        "mensagem": "Seu filme foi atualizado",
        ghibliJson

    }])
}

const alterarDuracao = (request, response) => {

    const idRequest = request.params.id
    let novaDuracao = request.body.running_time
    filmeFiltrado = ghibliJson.find(filme => filme.id == idRequest)
    filmeFiltrado.running_time = novaDuracao
    response.status(200).json([{

        "mensagem": "A duração do seu filme foi atualizado",
        ghibliJson

    }])

}

const deletaPorId = (request, response) => {

    const idRequest = request.params.id
    const indiceFilme = ghibliJson.findIndex(filme => filme.id == idRequest)

    ghibliJson.splice(indiceFilme, 1)

    response.status(200).json([{
        "message": "O filme selecionado foi deletado",
        "deletado": idRequest,
        ghibliJson
    }])
}

const deletePorDiretor = (request, response) => {

    const directorRequest = request.query.director
    const diretoresFiltrados = ghibliJson.filter(filme => filme.director.includes(directorRequest));

    for (indice = 0; indice < diretoresFiltrados.length; indice++) {
        console.log(indice, ghibliJson[indice])

        const index = ghibliJson.indexOf(diretoresFiltrados[indice]);
        ghibliJson.splice(index, 1);
    }

    response.status(200).json([{
        "message": "Os filmes selecionados foram deletados com sucesso",
        "deletado": directorRequest,
        ghibliJson
    }])

}


module.exports = {
    getAll,
    alterarDados,
    atualizarFilme,
    alterarDuracao,
    deletaPorId,
    deletePorDiretor

}



/*const pokeJson = require("../models/pokedex.json");
const express = require("express");
const app = express();

app.use(express.json());


const deletePokemonPorTitulo = (request, response) => {
    //id que quero deletar
    const typeRequest = request.query.type
   
    const tiposFiltrados = pokemonJson.filter(pokemon => pokemon.type.includes(typeRequest));

    for (indice = 0; indice < tiposFiltrados.length; indice++) {
        console.log(indice, pokemonJson[indice])
    
        const index = pokemonJson.indexOf(tiposFiltrados[indice]);
        pokemonJson.splice(index, 1);
        }
    
    response.status(200).json([
        {
            "message": "filme deletado com sucesso",
            "deletada": typeRequest,
            pokemonJson
        }
    ])

}*/







