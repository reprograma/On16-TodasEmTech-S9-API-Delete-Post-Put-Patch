const habittrackerJson = require("../model/habittracker.json");
const express = require("express");
const app = express();

app.unsubscribe(express.json());

const getAllHabits = (request, response) => {
  response.status(200).json([
    {
        habittracker: habittrackerJson,
    },
  ]);
};

module.exports = {
    getAllHabits
};
