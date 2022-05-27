// acessando o Jayson
const pokedexJson = require("../models/pokedex.json")
const express = require("express")
// acho que eu puxo o app em/src
const app = express()

app.use(express.json())

// chamando os poke tudo
//amei que funciona (req, res)
const pokedex = (req, res) => {
    res.status(200).json([
        {
            "Pokemon": `Aqui estão todos os pokémons`,
            pokedexJson
            
        }
    ])
}

// para mudar um bloco, com put
const updatePoke = (req, res) => {
    // escolher qual pokemon atualizar por id
    const idReq = req.params.id
    // para salvar e usar o body do postman
    let upPokemon = req.body
    // achar o pokemon
    let varrePokedex = pokedexJson.find(pokemon => pokemon.id == idReq)
    //  manipular o array no id encontrado
    pokedexJson.splice(varrePokedex, idReq, upPokemon)
    // bom, me diz se deu tudo certo, porfa
    res.status(200).json([{
        "message": "Pokemon atualizado",
        "alterado": idReq,
        pokedexJson
    }])
}

// alterar o nome por Patch
const updateName = (req, res) => {
    // escolher ql poke pelo nome
    const nameReq = req.query.name
    // nome novo
    let newName = req.body.name

    findPoke = pokedexJson.find(pokemon => pokemon.name.toLocaleLowerCase().includes(nameReq))
    findPoke.name = newName

    res.status(200).json([{
        "message": "seu pokemon foi rebatizado",
        "novo nome": nameReq,
        pokedexJson
    }])
}

// mudar o stats
const updateStats = (req, res) =>{
    const idReq = req.params.id
    let newSs = req.body.stats
    // encontrar o poke pra atualizar
    findPoke = pokedexJson.find(po => po.id == idReq)
    // novo corpo de status
    findPoke.stats = newSs

    res.status(200).json([{
        "message": "Status Atualizado, Obrigada Liinda",
        "alterado": findPoke,
        pokedexJson
    }])
}

// deletar por id
const deletePoke = (req, res) => {
    // pega id
    const idRequest = req.params.id
    //acha o numero dele
    const num = pokedexJson.find(item => item.id.includes(idRequest))
// abre o array e tira ele
    pokedexJson.splice(num, 1)
// dá retorno
    res.status(200).json([{
        "message": "Pokemon Cancelado, prin",
        "deletado": idRequest,
        pokedexJson
    }])
}
// vamos delete-lo por tipo
const deleteType = (re, res) => {
    // pega o valor pra type
    const typeReq = req.query.type
    // uma fun pra filtrar os pokemons
    const filterType = pokedexJson.filter(pok => pok.type.includes(typeReq))
// um for recortar o array cada vez que acha o type dito e remove
    for (let i = 0; i < pokedexJson.length; i ++) {
        const pokeNum = pokedexJson.indexOf(filterType[i]);
        pokedexJson.splice(pokeNum, 1)
    }
//pra nos apresentar o trabalho bem feito
    res.status(200).json([{
        "message": `Pronto, vamos apagar todos os pokemons de ${typeReq}`,
        "deletado": tipoRequest,
        pokedexJson
    }])
}   

module.exports = {
    pokedex,
    updatePoke,
    updateName,
    updateStats,
    deletePoke,
    deleteType
} 