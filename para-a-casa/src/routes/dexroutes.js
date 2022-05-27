// criar
const controller = require("../controllers/dexcontrollers.js")
// chmar express
const express = require("express")
// usar Router, da biblio
const router = express.Router()
// determinar as rotas que permita acessar as funções em controller
router.get("/", controller.pokedex)
router.put("/update/:id", controller.updatePoke)
router.patch("/update/:name", controller.updateName)
router.patch("/updatestatus/:id", controller.updateStats)
router.delete("/delete/:id", controller.deletePoke)
router.delete("/delete/:type", controller.deleteType)

module.exports = router 

