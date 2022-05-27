const controller = require ('../controller/filmescontroller')

const express = require('express')

const router = express.Router()

router.get("/catalogo", controller.getAll)
router.put("/change/:id", controller.updateMovie)
router.patch("/update/:id", controller.updateRunningTime)
router.delete("/delete/:id", controller.deleteFilme)
router.delete("/delete/deletedirector/director", controller.deleteFilmePorDiretor)

module.exports = router