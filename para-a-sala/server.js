const app = require('./src/app') //chamando o arquivo app

const PORT = 1313 //configurando a porta

app.listen(PORT, () => {
    console.log(`eai miguxa, to na porta ${PORT}`)
})

/// ou

/* app.listen(1313, () => {
    console.log(`eai miguxa, to na porta 1313`)
})
 */
