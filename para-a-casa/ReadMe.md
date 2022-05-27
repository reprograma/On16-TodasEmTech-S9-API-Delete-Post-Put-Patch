# Semana 09: Introdução à API: DELETE + PUT + PATCH

## Conteúdo da semana 
Essa semana continuamos estudando **CRUD e HTTP**, mas nos aprofundamos mais em *DELETE, PUT, PATCH* e aprendemos sobre nossa amiga: **arquitetura MVC**.
Fizemos muitos exercícios em sala e tivemos um desafio para casa que me deixou doida.
Nesta semana passei muito estresse com o postman e reli meus códigos mais ou menos 98 mil vezes, mas consegui entregar a tarefa! Para mim, o mais difícil foi conseguir deletar o filme pelo diretor. Passei mais de um dia tentando fazer funcionar até que uma hora simplesmente foi. Não é mágica, mas às vezes bem parece, viu?

![Voador]("C:\Users\clara\Desktop\Reprograma\On16-TodasEmTech-S9-API-Delete-Post-Put-Patch\para-a-casa\nos-que-voa.gif")

## O que aprendi a duras penas

> PUT E PATCH
Servem para atualizar dados em um model, mas são **diferentes**. Fique atenta, jovem dev!!!

O **PUT** substituí TODOS os OBJETOS que queremos mudar de UMA VEZ SÓ. Já o **PATCH** só faz uma correção em uma única propriedade (pensa que patch em inglês significa REMENDO. Ou seja, você tá só dando uma ajeitadinha ali num desfiado, não tá mexendo em toda estrutura).

![Remendo]("C:\Users\clara\Desktop\Reprograma\On16-TodasEmTech-S9-API-Delete-Post-Put-Patch\para-a-casa\remendo.jpg")

> DELETE
Por sua vez, o **DELETE** é usado para removere um recurso ou uma coleção deles. É tchau, tchau. Tem que usar com cautela, mas é uma deli.

> ARQUITETURA MVC
Essa arquitetura nada mais é do que um padrão de organização das nossas pastas e arquivos, em três camadinhas (pro backend): 

- Models : Manipulação de dados | Armazenamento;
- Controller : Onde fazemos a lógica;
- Routes : Onde ficam as rotas e os verbos HTTP.

## Exercício da semana
No exercício da semana, eu peeguei o model "ghiblifilms.json" e fiz algumas atividades, sendo elas:

- Uma rota que altere todos os dados de um filme, com exceção do id
- Uma rota que altere a duração do filme
- Uma rota que possibilite excluir o filme pelo ID
- Uma rota que possibilite excluir o filme pelo diretor (nessa eu sofri demais)

