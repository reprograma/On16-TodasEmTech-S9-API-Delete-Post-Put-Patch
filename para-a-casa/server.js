const app = require ('./src/app') // chamando o arquivo app

const PORT = 8080 // minha porta

// Iniciar o servidor
app.listen( PORT, () => {
    console.log(`Me encontro na porta ${PORT}`)
})
