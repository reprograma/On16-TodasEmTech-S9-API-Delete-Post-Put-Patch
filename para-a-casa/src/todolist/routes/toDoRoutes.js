const controller = require('../controller/toDoController')

const express = require('express')

const router = express.Router()


router.get('/', controller.getAllTask)
router.put('/change/:id', controller.updateTask)
router.patch('/update/:id', controller.updateTaskCategory)
router.delete('/:id', controller.deleteTaskId)
router.delete('/delete')

module.exports = router 