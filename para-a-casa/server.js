const app = require("./src/app")

const PORT = 2323

app.listen( PORT, () => {
    console.log(`Sua lista de Pokemons esté rodando na porta ${PORT}`)
})