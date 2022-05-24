const app = require('./src/app.js') // chamnando o arquivo app.js

const PORT = 1313 // CONFIGURANDO A PORTA

app.listen(PORT, () => {
    console.log(`eai amiguinhas, to na porta ${PORT}`)
})