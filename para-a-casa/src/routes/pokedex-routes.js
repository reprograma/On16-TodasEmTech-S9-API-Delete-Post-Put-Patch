const controller = require("../controller/pokedexController.js")

const express = require("express")

const router = express.Router()

router.patch("/update/:id", controller.updateStats)
router.put("/update/:id", controller.updatePoke)
router.delete("/deletebytype/", controller.deletePokeByType)
router.delete("/deletebyid/:id", controller.deletePokeById)

module.exports = router