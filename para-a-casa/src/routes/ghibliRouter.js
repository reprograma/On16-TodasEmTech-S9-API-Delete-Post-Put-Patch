const controller = require('../controller/ghibliControllers')
const express = require('express');

const router = express.Router()

router.get("/catalogo", controller.getAll);
router.put("/dataUpdate/:id", controller.dataUpdate)
router.patch("/titleUpdate/:id", controller.titleUpdate)
router.patch("/runningTimeUpdate/:id", controller. runningTimeUpdate)
router.delete("/deleteById/:id", controller.deleteById)
router.delete("/deleteByDirector/:director", controller.deleteByDirector)

module.exports = router