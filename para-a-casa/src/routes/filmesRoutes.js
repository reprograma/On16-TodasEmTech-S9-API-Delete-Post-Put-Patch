const controller = require('../controller/filmesControllers.js')
const express = require('express')

const router = express.Router()

router.get("/catalogoGhibli", controller.getListarTudo)
router.put("/atualizarTodosDados/:id", controller.alterarTodosDados)
router.patch("/atualizarDuracao/:id", controller.alterarDuracao)
router.delete("/deleteId/:id", controller.deletaFilmePorId)
router.delete("/delete/director", controller.deleteFilmePorDiretor)

module.exports = router