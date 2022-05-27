const controller = require('../controller/ghiblifilmsController')

const express = require('express')

const router = express.Router()

router.get("/catalogo", controller.getAll)
router.patch("/update/:id", controller.updateRunningTime)
router.put("/change/:id", controller.updateMovie)
router.delete("/delete/:id", controller.deleteFilme)
router.delete("/delete/director/:director", controller.deleteDiretorFilme)


module.exports = router