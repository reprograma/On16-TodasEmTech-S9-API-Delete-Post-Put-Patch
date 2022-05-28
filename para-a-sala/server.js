const app = require('./src/app') //chamando o arquivo app

const PORT = 3030 //CONFIGURA A PORTA

app.listen (PORT, () => {
    console.log(`Oie, to na porta ${PORT}. VEM!`)
})

// //ou
// app.listen(3030, () => {
//     console.log(`eai miguxa, to na porta 3030`)
// })