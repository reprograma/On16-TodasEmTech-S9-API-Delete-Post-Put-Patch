
const app = require("./src/app")
const chave = 0123

app.listen( chave, () => {
    console.log(`Pokedex: ${chave}`)
})  