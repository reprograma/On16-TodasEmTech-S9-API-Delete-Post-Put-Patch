const controller = require('../controller/pokemonController')

const express = require('express')
const { Router } = require('express')


const router = express.Router()

router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller.updateTitle)
router.put("/change/:id", controller.updatePokemon)
router.delete("/delete/:id", controller.deletePokemon)
router.delete("/delete/title/:title", controller.deletePokemonPorTitulo)


module.exports = router