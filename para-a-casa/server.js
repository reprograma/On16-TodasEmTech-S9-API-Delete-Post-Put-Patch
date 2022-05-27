
// ligando ao app.js em /src
const app = require("./src/app")

// criando uma porta
const portao = 1313

// ligando o serv
app.listen( portao, () => {
    console.log(`Acesse a Pokedex no ${portao}`)
}) 