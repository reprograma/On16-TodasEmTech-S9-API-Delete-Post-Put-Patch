const controller = require('../controller/filmesController')

const express = require('express')

const router = express.Router()

router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller.updateRunningTime)
router.delete("/delete/:id", controller.deleteFilme)
router.delete("/delete/director/:director", controller.deleteFilmePorDiretor)
router.put("/change/:id", controller.updateMovie)

module.exports = router