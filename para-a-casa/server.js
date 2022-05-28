const app = require('./src/app')

const PORT = 8080

//Iniciando o servidor
app.listen( PORT, () => {
    console.log(`Eiiii, estou na porta: ${PORT}`);
})