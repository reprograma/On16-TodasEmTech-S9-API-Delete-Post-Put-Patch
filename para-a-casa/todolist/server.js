const app = require("./src/app"); //chamando o arquivo app

const PORT = 3030; //CONFIGURA A PORTA

app.listen(PORT, () => {
  console.log(`Oie, minhas atividades estão na porta ${PORT}. VEM VER! ♥`);
});
