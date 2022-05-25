const toDoList = require('../models/todolist.json')
const express = require('express')
const app = express() //executar express

app.use(express.json()) //body parser

const getAll = (request, response) => {

    response.status(200).send(toDoList)
}

const updateTaskDue = (request, response) => {

    const idRequest = request.params.id
    const idRequestTask = request.params.id_task
    let taskDue = request.body['due-date']

    let findId = toDoList.find(find => find.id == idRequest)
    let findTask = (findId.tasks).find(task => task.id == idRequestTask)
    findTask['due-date'] = taskDue


    if (findTask) {
        response.status(200).send({ 
            "message": "The task has been updated successfully.",
            findTask
        }) 
    }
    else {
        response.status(404).send({
            "message": "Task does not exist in database."
        })
    }
}

const updateAllTask = (request, response) => {
    
    const idRequest = request.params.id
    const idRequestTask = request.params.id_task
    let taskRequest = request.body
    
    let findId = toDoList.find(find => find.id == idRequest)
    console.log(findId)
    let indexTask = (findId['tasks']).findIndex(task => task.id == idRequestTask)

    toDoList.splice(indexTask,1,taskRequest)

  if (findId) {
    response.status(200).send({ 
        "message": "The task has been updated successfully.",
        toDoList
    }) 
}
else {
    response.status(404).send({
        "message": "Task does not exist in database."
    })
}

}

const deleteTask = (request, response) => {
    const idRequest = request.params.id

    let findId = toDoList.findIndex(find => find.id == idRequest)

    toDoList.shift(findId,1)

    response.status(200).json([{
        "message": "item deletado",
        "detalhes": findId,
        toDoList
    }])
}

module.exports = {
    getAll,
    updateTaskDue,
    updateAllTask,
    deleteTask
}

