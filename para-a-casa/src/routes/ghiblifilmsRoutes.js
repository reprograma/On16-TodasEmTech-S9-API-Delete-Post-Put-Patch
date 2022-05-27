const controller = require ('../controller/ghiblifilmsControlle')

const express = require('express')

const router = express.Router()

router.get("/catalogo",controller.getAll)
router.patch("/update/:id",controller.updateTitle)
module.exports = router