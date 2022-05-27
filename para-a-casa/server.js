//chamando o arquivo app
const app = require('./src/app') 

//configurando a porta
const PORT = 1313 

app.listen( PORT, () => {
	console.log(`Olá, estou na porta ${PORT}`)
	})