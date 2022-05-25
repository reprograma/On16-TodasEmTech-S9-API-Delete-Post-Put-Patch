const express = require('express');

const toDoListRoutes = require("./routes/toDoListRouter")

const app = express() 

app.use(express.json()) //uso o bodyparser

//criar uma rota raiz

app.use("/todolist", toDoListRoutes)

//exportando para usar o server.js
module.exports = app
