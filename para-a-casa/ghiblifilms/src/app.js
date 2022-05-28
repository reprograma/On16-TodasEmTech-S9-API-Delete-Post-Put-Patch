const express = require("express");

const ghiblifilmsRoutes = require("./routes/ghiblifilmsRoutes");

const app = express();

app.use(express.json());

app.use("/ghiblifilms", ghiblifilmsRoutes);

module.exports = app;
