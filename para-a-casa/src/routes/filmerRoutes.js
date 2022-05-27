const controller = require('../controller/filmeController')
const express = require('express') 
const router = express.Router()

router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller.updateTitle)
router.put("/change/:id", controller.updateMovie)
router.delete("/delete/title/:title", controller.deleteFilmePorTitulo) //coloquei essa rota de delete antes da delete/:id + subrota 'title' para não dar conflito 
router.delete("/delete/:id", controller.deleteFilme)

module.exports = router