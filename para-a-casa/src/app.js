const express = require("express");

const pokemonRoutes = require("./routes/pokemon-routes");

const app = express();

app.use(express.json());

app.use("/", pokemonRoutes);

module.exports = app;