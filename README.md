Turma Online 16 - Back-end | Introdução ao HTTP Métodos PUT - PATCH - DELETE

1. PUT E PATCH

- Responsáveis por atualizar os dados de um registro.

- O **PUT** substitui todo o objeto que se deseja modificar, já o **PATCH** modifica apenas uma propriedade dentro desse objeto.

~~~JSON
"nome":"may",
"idade": 16,
"cor": "azul"
~~~

- No exemplo, ao usar **PUT** para alterar a **idade** para 21, todo o objeto seria alterado para apenas:
~~~JSON
"idade":21
~~~

- Mas, ao utilizar o **PATCH** apenas a propriedade **idade** seria atualizado:
~~~JSON
"nome":"may",
"idade": 21,
"cor": "azul"
~~~

- Usa-se o **PUT**, muitas vezes, pela performance que ele tem quando relacionado ao banco de dados. Substituir um dado inteiro é mais rápido do que somente uma propriedade dele.

2. DELETE

- Utiliza-se para remover um recurso ou uma coleção de recursos.

3. Arquitetura MVC

- Padrão de arquitetura de software que divide a aplicação em três camadas: _Model View Controller_.

- Formato de organização do código.

