<h1 align="center"> ➕ 🔒 Endpoints relacionados a criação e autenticação de usuários</h1>
<h3 align="center"> 🚩 api/users/</h3>


### ➕ POST /api/users/
Adicionar um novo usuário 

Requer um corpo JSON com os seguintes campos:
 -  `username`
 -   `lastname`
 -   `birth_day`
 -   `email`
 -   `password`

 Exemplo de respostas:

```json
{
    "statusMessage": "Usuário cadastrado",
}
```


### 🔒 POST /api/users/auth
Autenticar um usuário, retornando um token jwt 

Requer um corpo JSON com os seguintes campos:
 -   `email`
 -   `password`

 Exemplo de respostas:
```json
{
    "statusMessage": "Autenticado",
    "token": "<token>" 
}
```
ou
```json
{
    "statusMessage": "Não autenticado"
}
```

### Exemplos de resposta relacionadas aos middewares: 

```json
{
    "statusMessage": "Esse usuário já existe",
}
```
```json
{
    "statusMessage": "Dados inválidos",
}
```
```json
{
    "statusMessage": "E-mail inválido",
}
```
```json
{
    "statusMessage": "Dados inexistentes",
}
```
