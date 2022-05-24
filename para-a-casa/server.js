// Importando o arquivo app.js
const app = require('./src/app')

// Porta configurada
const PORT = 8080

app.listen(PORT, () => {
    console.log(`Olá, estou na porta ${PORT}`)
})