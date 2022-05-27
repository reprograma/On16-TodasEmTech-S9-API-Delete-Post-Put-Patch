// centralizando a pasta raiz

const express = require("express")// importando do express
const filmeRoutes = require("./routes/filmeRoutes") // import da continuação de routes
const app = express() // executo o expreess

app.use(express.json()) // uso o bodyparser


// criar rota raiz

app.use("/filmes", filmeRoutes)



module.exports = app