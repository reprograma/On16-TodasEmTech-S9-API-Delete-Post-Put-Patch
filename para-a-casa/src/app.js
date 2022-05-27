// ativando biblio express
const express = require("express")
// variavel solicitando o arquivo com as rotas
const dexRoutes = require("./routes/dexroutes")
// para que o app use o conteudo do express
const app = express()

// manipular mais facil
app.use(express.json())
// dando acesso ao link e trazendo as rotas
app.use("/pokedex", dexRoutes)

//para que eu possa invocar o app
module.exports = app 