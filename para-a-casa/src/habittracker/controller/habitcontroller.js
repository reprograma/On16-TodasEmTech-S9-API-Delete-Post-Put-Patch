const habitTracker = require('../model/habittracker.json')

const express = require('express')

const app = express()

app.use(express.json())

const getAllHabit = (request, response) => {

    response.status(200).json(habitTracker)
};

const updateHabit = (request, response) => {
    const idRequest = request.params.id;
    let habitRequest = request.body;

    let foundHabit = habitRequest.find((habits) => habits.id == idRequest);

    habitTracker.splice(foundHabit, 1, habitRequest);

    if (foundHabit > -1) {
      response.status(200).json({
        message: "Hábito alterado com sucesso!",
        habitTracker,
      });
    } else {
      response.status(404).json({
        message: "Esse hábito não foi alterado!",
      });
    }
  };

const updateHabitName = (request, response) => {

    const idRequest = request.query.id
    const requestHabit = request.query.name
    let habitName = request.body.name

    let findId = habitTracker.find(find => find.id == idRequest)
    let findHabit = (findId.tasks).find(task => task.id == requestHabit)
    findHabit.name = habitName


    if (findHabit) {
        response.status(200).send({ 
            "message": "O hábito foi alterado com sucesso.",
            findHabit
        }) 
    }
    else {
        response.status(404).send([{
            "message": "Hábito não encontrado."
        }])
    }
};

const deleteHabitId = (request, response) => {
    const idRequest = request.params.id

    let findId = habitTracker.filter(find => find.id.includes(idRequest))

    habitTracker.shift(findId,1)

    response.status(200).json([{
        "message": "Id deletado",
        "detalhes": findId,
        habitTracker
    }])
};

const deleteHabitMonth = (request, response) => {
    const monthRequest = request.params.month

    let findMonth = habitTracker.filter(month => month.includes(monthRequest))

    .shift(findMonth,1)

    response.status(200).json([{
        "message": "Mês deletado",
        "detalhes": findMonth,
        habitTracker
    }])
}

module.exports = {
    getAllHabit,
    updateHabit,
    updateHabitName,
    deleteHabitId,
    deleteHabitMonth
}