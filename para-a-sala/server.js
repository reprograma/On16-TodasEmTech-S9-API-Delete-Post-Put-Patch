const app = require('./src/app') // chamando o arquivo app

const PORT = 1313 //CONFIGURANDO A PORTA

app.listen(PORT, () => {
    console.log(`eai miguxa, to na porta ${PORT}`)
})
