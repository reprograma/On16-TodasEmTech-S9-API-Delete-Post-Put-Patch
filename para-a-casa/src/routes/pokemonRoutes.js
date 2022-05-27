const controller = require("../controller/pokemonController")
const express = require("express")

const router = express.Router()

router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller.updateStats)
router.put("/change/:id", controller.updatePokemon)
router.delete("/delete/:id", controller.deletePokemonId)
router.delete("/delete/", controller.deletePokemonTipo)


module.exports = router

