
const pokemonJson = require('./models/pokedex.json')
const express = require('express')
const app = express() 

app.use(express.json())

const getAll = (request, response) => {

    response.status(200).json([
        {
            "pokemons": pokemonJson
        }
    ])

}


const updateTitle = (request, response) => {


    const idRequest = request.params.id
    let novoTitulo = request.body.title

    pokemonFiltrado = pokemonJson.find(pokemon => pokemon.id == idRequest)
    pokemonFiltrado.title = novoTitulo

    response.status(200).json([{

        "mensagem": "seu pokemon foi atualizado",
        pokemonFiltrado

    }])
}

const updatePokemon = (request, response) => {

    const idRequest = request.params.id
    let pokemonRequest = request.body
    let indexEncontrado = pokemonJson.findIndex(pokemon => pokemon.id == idRequest)
    pokemonJson.splice(indexEncontrado, 1, pokemonRequest)

    response.status(200).json([
        {
            "message": "pokemon atualizado",
            pokemonJson
        }
    ])
}

const deletePokemon= (request, response) => {
    
    const idRequest = request.params.id
    const idPokemon = pokemonJson.findIndex(pokemon => pokemon.id == idRequest)
    pokemon.splice(idPokemon, 1)
    
    response.status(200).json([{
        "message": "pokemon deletado",
        "deletado": idRequest,
        pokemonJson
    }])

    }

    const deletePokemonPorTitulo = (request, response)=>{

        const idRequest = request.params.title.toLowerCase()
        const idPokemon = pokemonJson.findIndex(pokemon => pokemon.title.toLowerCase() == idRequest)
        pokemonJson.splice(idPokemon, 1)

        response.status(200).json([
            {
                "message": "pokemon deletado com sucesso",
                "deletada": idRequest,
                pokemonJson
            }
        ])
    }


module.exports = {
    getAll,
    updateTitle,
    updatePokemon,
    deletePokemon,
    deletePokemonPorTitulo
}
