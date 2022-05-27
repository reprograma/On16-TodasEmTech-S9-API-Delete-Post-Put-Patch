const controller = require('../controller/habitcontroller')

const express = require('express')

const router = express.Router()


router.get('/', controller.getAllHabit)
router.put('/change/:id', controller.updateHabit)
router.patch('/update/:id', controller.updateHabitName)
router.delete('/:id', controller.deleteHabitMonth)
router.delete('/delete')

module.exports = router 
