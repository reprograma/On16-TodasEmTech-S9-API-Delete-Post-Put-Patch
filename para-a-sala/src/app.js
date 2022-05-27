const express = require("express"); // importando o express

const filmesRoutes = require("./routes/filmeRoutes"); // importa da continuação das rotas de filmes

const app = express(); // executa o express

app.use(express.json()); // usa o bodyparser

// cria uma rota raiz:

app.use("/filmes", filmesRoutes);

// exporta para usar o server.js

module.exports = app;
