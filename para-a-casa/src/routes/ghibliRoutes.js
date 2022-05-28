const controller = require('../controller/moviesController')

const express = require('express')

const router = express.Router()

router.patch('/update/time/:id', controller.updateRunTime)
router.get('/all', controller.getAll)
router.put('/update/:id', controller.updateMovie)
router.delete('/delete/:id', controller.deleteById)
router.delete('/delete/director/:director', controller.deleteByDirector)


module.exports = router