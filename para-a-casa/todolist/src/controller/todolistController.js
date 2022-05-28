const todolistJson = require("../model/todolist.json");
const express = require("express");
const app = express();

app.unsubscribe(express.json());

const getAllTasks = (request, response) => {
  response.status(200).json([
    {
      todolist: todolistJson,
    },
  ]);
};

const replaceTasks = (request, response) => {
  const idRequest = request.params.id;
  let tasksRequest = request.body;

  let foundTasks = todolistJson.findIndex((tasks) => tasks.id == idRequest);

  todolistJson.splice(foundTasks, 1, tasksRequest);

  if (foundTasks > -1) {
    response.status(200).json({
      message: "Tarefa alterada com sucesso!",
      todolist: todolistJson,
    });
  } else {
    response.status(404).json({
      message: "Essa tarefa não foi alterada!",
    });
  }
};

const modifyCategoryName = (request, response) => {
  const nameRequest = request.params.id;

  let newName = request.body["category-name"];

  todolistFilter = todolistJson.find((task) => task.id == nameRequest);

  if (todolistFilter) {
    todolistFilter["category-name"] = newName;

    response.status(200).json({
      mensagem: "O nome da categoria dessa tarefa foi modificada com sucesso!",
      todolist: todolistJson,
    });
  } else {
    response.status(404).json([
      {
        message: "O nome da categoria dessa tarefa não foi modificada!",
      },
    ]);
  }
};

const deleteById = (request, response) => {
  const idRequest = request.params.id;

  const deleteId = todolistJson.findIndex((task) => task.id == idRequest);

  todolistJson.splice(deleteId, 1);

  if (deleteId > -1) {
    response.status(200).json({
      message: "Tarefa deletada pelo id!",
      deleted: idRequest,
      todolist: todolistJson,
    });
  } else {
    response.status(404).json({
      message: "Essa tarefa não foi deletada!",
    });
  }
};

const deleteByCategory = (request, response) => {
  const categoryRequest = request.query["category-name"];

  const categoryFilter = todolistJson.filter((task) =>
    task["category-name"].includes(categoryRequest)
  );

  for (i = 0; i < categoryFilter.length; i++) {
    const search = todolistJson.indexOf(categoryFilter[i]);
    todolistJson.splice(search, 1);
  }

  if (categoryFilter.length > 0) {
    response.status(200).json([
      {
        message: "Tarefa deletada pelo categoria!",
        deleted: categoryRequest,
        todolist: todolistJson,
      },
    ]);
  } else {
    response.status(404).json({
      message: "Essa tarefa não foi deletada!",
    });
  }
};

module.exports = {
  getAllTasks,
  replaceTasks,
  modifyCategoryName,
  deleteById,
  deleteByCategory,
};
