const app = require('./src/app') // chamando o arquivo app

const PORT = 3030 //CONFIGURANDO A PORTA

app.listen(PORT, () => {
    console.log(`Miglesss, to na porta ${PORT}`)
})
