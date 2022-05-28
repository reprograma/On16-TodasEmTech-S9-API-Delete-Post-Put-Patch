const express = require('express')
const controller = require('../controller/gFilmeController')
const router = express.Router()

router.get('/catalogo', controller.gAll)
router.put('/mudaFilme/:id', controller.mudaFilme)
router.patch('/mudaDuracao/:id', controller.mudaDuracao)
router.delete('/deleteId/:id', controller.deleteByID)
router.delete('/deleteDirector/director', controller.deleteByDirector)





module.exports = router
