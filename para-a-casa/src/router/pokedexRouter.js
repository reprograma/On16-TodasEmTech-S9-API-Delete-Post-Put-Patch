const express = require('express')
const router = express.Router()
const controller = require('../controller/pokedexController')


router.get('/catalogo', controller.getAll)
router.put("/update/:id", controller.updatePokemon)
router.delete("/delete/type", controller.deletarPokemonPorTipo)
router.patch("/update/stats/:id", controller.alterarStats)




module.exports = router
