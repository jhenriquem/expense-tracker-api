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
    "statusMessage": "Successful",
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
    "statusMessage": "Authenticated",
    "token": "<token>" 
}
```
ou
```json
{
    "statusMessage": "Unauthenticated"
}
```

### Exemplos de resposta relacionadas aos middewares: 

```json
{
    "statusMessage": "The user already exists",
}
```
```json
{
    "statusMessage": "Invalid data",
}
```
```json
{
    "statusMessage": "Invalid email",
}
```
```json
{
    "statusMessage": "Non-existent data",
}
```
