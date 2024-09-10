<h1 align="center">💸 Expenses tracker API</h1> 
Uma API para um aplicativo de rastreador de despesas, com um sistema de autenticação, usando jwt, e validação de credenciais, como email. Podemos registrar e autenticar um usuário, cada usuário pode criar, apagar, atualizar e ver suas despesas, podendo filtra-las por categoria e tempo.

### 📋 Caracteristicas e funcionalidades

- Uso de uma chave de api
- Registro de novos usuários
- Autenticação de usuários usando jwt
- Validação de email 
- Criar, ler, apagar e atualizar as despesas
- Criar e apagar categorias
- Filtrar as despesas por categoria ou tempo

### Tecnologias e bibliotecas usadas 

- JS/TS 
- Nodejs
- Express
- MongoDB
- [bcrypt](https://www.npmjs.com/package/bcrypt), para hash de senhas
- [deep-email-validator](https://www.npmjs.com/package/deep-email-validator), validação do email
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
- [morgan](https://expressjs.com/en/resources/middleware/morgan.html), logs de rotas

### 🚩 Endpoits 
Todos os endpoints exigem um cabeçalho de autorização com a chave da API, como: Authorization: Basic <apikey>
