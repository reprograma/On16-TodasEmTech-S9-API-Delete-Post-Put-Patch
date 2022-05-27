# Resumo do que foi ministrado na semana 09 do {Reprograma}

## Os assuntos abordados na referente semana foi PUT, PATCH, DELETE e Padrão MVC

**Put** - É usado para subsituir todo o objeto que se quer modificar.
quando mando requisição via put vai alterar o que mandei e substituir todo o objeto que mandei! Geralmente mudamos o corpo inteiro, para acabar não perdendo coisas que não posso perder. Muitas vezes vou usar o put pela performance.

**Patch** - É usado para modificar apenas uma propriedade dentro do meu objeto. 

**Delete** - Usamos para excluir um recurso, ou deletar alguma coisa, quero deletar uma coleção inteira e posso fazer isso também. Caso delete coisa errada, posso voltar? Local sim, mas se foi uma coisa que já subi, eu não consigo pegar de novo.

Como saber se algo foi deletado ou não? quero deletar por id por exemplo o filme, aí deleto e depois passo um get e esse filme q deletei não pode estar lá. Essa é a comprovação de que foi deletado.

## Padrão MVC 
É um padrão usado na arquitetura de software, separando sua aplicação em três camadas: view(frontend) camada de manipulação dos dados (model) e a camada de controle (controller). O MVC basicamente é uma forma de organizar nosso código -  nosso projeto. 

Na minha pasta models terá os meus dados. No controller farei toda a minha questão de lógica, irei controlar o que vai acontecer no meu projeto. Na minha pasta de router terá as minhas rotas.

Resumindo o MVC é que uma forma de organizar o nosso código.












<img src="https://c.tenor.com/cscqMnXoXJsAAAAj/dab-dance.gif" width="250" height="250" /> </h4> <br>

