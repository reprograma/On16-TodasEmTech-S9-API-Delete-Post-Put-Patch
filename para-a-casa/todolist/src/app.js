const express = require("express");

const todolistRoutes = require("./routes/todolistRoutes");

const app = express();

app.use(express.json());

app.use("/todolist", todolistRoutes);

module.exports = app;
