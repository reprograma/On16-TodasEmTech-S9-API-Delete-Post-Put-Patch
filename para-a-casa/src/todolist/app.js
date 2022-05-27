const express = require('express')

const toDoRoutes = require('./routes/toDoRoutes')

const app = express()


app.use(express.json())

app.use('/todolist', toDoRoutes)



module.exports = app