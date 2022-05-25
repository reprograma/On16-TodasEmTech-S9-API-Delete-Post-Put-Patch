const controller = require("../controller/pokecontroller")

const express = require("express")

const router = express.Router()

router.get("/", controller.getAll)
router.put("/update/:id", controller.updateAll)
router.patch("/update/:id", controller.updateStats)
router.delete("/deletar/tipo", controller.deleteTipo)
router.delete("/deletar/:id", controller.deletePokemon)

module.exports = router