const controller = require('../controller/ghibliController')
const express = require('express')

const router = express.Router()

router.get("/catalogo", controller.getAll);
router.put("/alterarDados/:id", controller.alterarDados)
router.patch("/update/:id", controller.updateTitle)
router.patch("/atualizarDuracao/:id", controller.alterarDuracao)
router.delete("/deleteId/:id", controller.deletaPorId)
router.delete("/deleteDirector/:director", controller.deletePorDiretor)


module.exports = router