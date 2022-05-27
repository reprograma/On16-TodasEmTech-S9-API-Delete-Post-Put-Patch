const express = require('express')

const habitRoutes = require('./routes/habitroutes')

const app = express()


app.use(express.json())

app.use('/habit', habitRoutes)



module.exports = app
