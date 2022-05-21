const app = require('./src/app') //chamando o arquivo app

const PORT = 1313 //configurando a porta

app.listen( PORT, () => {
	console.log(`Olá, estou na porta ${PORT}`)
	})