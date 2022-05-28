const app = require('./src/app') //Acessoa arquivo app
const PORT = 2000 //Define a porta

//Aciona funcionamento
app.listen( PORT, () => {
    console.log('Deu certo a porta')
})