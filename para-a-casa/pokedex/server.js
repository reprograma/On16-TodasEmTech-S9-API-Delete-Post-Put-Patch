const app = require("./src/app");

const PORT = 3030;

app.listen(PORT, () => {
  console.log(`Pokemón na porta ${PORT}. Quem é este POKÉMON?!`);
});
