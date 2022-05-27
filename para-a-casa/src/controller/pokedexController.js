const pokedexJson = require('../models/pokedex.json')
const express = require('express')
const { response } = require('../app')

const app = express()
app.use(express.json())

const getAll = (request, response) => {
    response.status(200).json([{

        "pokedex": pokedexJson
    }])
}

const updatePokemon = (request, response) => {
    const idPokemon = request.params.id
    const pokemonAtualizado = request.body


    const posicaoPokemon = pokedexJson.findIndex(pokemon => {
        pokemon.id == idPokemon
    })

    pokedexJson.splice(posicaoPokemon, 1, pokemonAtualizado)
    response.status(200).json([{

        "mensagem": "lista de pokemon atualizada",
        pokedexJson
    }])
}

const mudarStats = (request, response) => {
    const idPokemon = request.params.id
    novoStats = request.body

   let pokemon = pokedexJson.find(pokemon =>
        pokemon.id == idPokemon
    )
     pokemon.stats = novoStats
    response.status(200).json([
        {
            "mensagem": "Stats do pokemon alterado",
            pokemon
        }
    ])
}

const deletarPokemonPorId = (request, response) => {
    const idRequest = request.params.id

    const indicePokemon = pokedexJson.findIndex(pokemon => {
        return pokemon.id == idRequest
    })
    pokedexJson.splice(indicePokemon, 1)

    response.status(200).json([{
        "message": "Pokemon deletado por id",
        "deletado": idRequest,
        pokedexJson
    }])

}


const deletarPokemonPorTipo = (request, response) => {

    const typeRequest = request.query.type

    const tiposFiltrados = pokedexJson.filter(pokemon => pokemon.type.includes(typeRequest))

    for (indice = 0; indice < tiposFiltrados.length; indice++) {

        const index = pokedexJson.indexOf(tiposFiltrados[indice])
        console.log(tiposFiltrados[indice])
        pokedexJson.splice(index, 1)

    }
    response.status(200).json([
        {
            "mensagem": "Pokemon deletado por tipo com sucesso",
            "deletado": typeRequest,
            pokedexJson
        }
    ])
}


module.exports = {
    getAll,
    updatePokemon,
    deletarPokemonPorTipo,
    mudarStats,
    deletarPokemonPorId
}