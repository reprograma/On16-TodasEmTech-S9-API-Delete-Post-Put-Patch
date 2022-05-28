const express = require("express");

const habittrackerRoutes = require("./routes/habittrackerRoutes");

const app = express();

app.use(express.json());

app.use("/habittracker", habittrackerRoutes);

module.exports = app;
