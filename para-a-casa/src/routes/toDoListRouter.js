const controller = require('../controller/toDoList')

const express = require('express')
const { route } = require('../app')

const router = express.Router()

router.get('/tarefas', controller.getAll)
router.patch('/update/:id/task/:id_task', controller.updateTaskDue)
router.put('/update/:id/task/:id_task', controller.updateAllTask)
router.delete('/:id', controller.deleteTask)
// router.patch('/update/:id', controller.updateTitle)

// router.put('/update/:id', controller.updateMovie)

// router.delete('/delete/:id', controller.delete)

module.exports = router