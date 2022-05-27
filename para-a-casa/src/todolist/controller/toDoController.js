const toDoList = require('../model/todolist.json')

const express = require('express')

const app = express()

app.use(express.json())

const getAllTask = (request, response) => {

    response.status(200).json(toDoList)
};

const updateTask = (request, response) => {
    const idRequest = request.params.id;
    let taskRequest = request.body;

    let foundTasks = toDoList.findIndex((tasks) => tasks.id == idRequest);

    toDoList.splice(foundTasks, 1, taskRequest);

    if (foundTasks > -1) {
      response.status(200).json({
        message: "Tarefa alterada com sucesso!",
        toDoList,
      });
    } else {
      response.status(404).json([{
        message: "Essa tarefa não foi alterada!",
      }]);
    }
  };

const updateTaskCategory = (request, response) => {

    const idRequest = request.params.id
    const requestTask = request.params.category
    let taskCategory = request.body['category-name']

    let findId = toDoList.find(find => find.id == idRequest)
    let findTask = (findId.tasks).find(task => task.id == requestTask)
    findTask['category-name'] = taskCategory


    if (findTask) {
        response.status(200).send({ 
            "message": "A tarefa foi alterada com sucesso.",
            findTask
        }) 
    }
    else {
        response.status(404).send([{
            "message": "Tarefa não encontrada"
        }])
    }
};

const deleteTaskId = (request, response) => {
    const idRequest = request.params.id

    let findId = toDoList.filter(find => find.id.includes(idRequest))

    toDoList.shift(findId,1)

    response.status(200).json([{
        "message": "Id deletado",
        "detalhes": findId,
        toDoList
    }])
};

const deleteTaskCategory = (request, response) => {
    const categoryRequest = request.params['category-name']

    let findCategory = toDoList.filter(category => category['category-name'].includes(categoryRequest))

    toDoList.shift(findCategory,1)

    response.status(200).json([{
        "message": "Categoria deletada",
        "detalhes": findCategory,
        toDoList
    }])
}

module.exports = {
    getAllTask,
    updateTask,
    updateTaskCategory,
    deleteTaskId,
    deleteTaskCategory
}