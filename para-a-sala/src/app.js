const express = require("express");

const filmesRoutes = require("./routes/filmesRoutes");

const app = express();

app.use(express.json());

// criar uma rota raiz

app.use("/filmes", filmesRoutes);

module.exports = app;
