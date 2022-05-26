const controller = require("../controller/filmesController")
const express = require("express")

const router = express.Router()

router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller.updateTitle)
router.put("/modifica/:id", controller.updateMovie)
router.delete("/delataPorId/:id", controller.deletaFilmeId)



module.exports = router