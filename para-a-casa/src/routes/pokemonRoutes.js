const controller = require("../controller/pokemonController")

const express = require("express")

const router = express.Router()

router.put("/update/:id", controller.updateAll)
router.patch("/change/:id", controller.updateStats)
router.delete("/delete/:id", controller.deletePokeminho)
router.delete("/delete/name/:name", controller.deleteNominho)


module.exports = router