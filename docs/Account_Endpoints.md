<h1 align="center"> 👤 Endpoints relacionados a um usuário</h1>
<h3 align="center"> 🚩 api/users/account</h3>
Todos os endpoints exigem um cabeçalho de autorização com o token jwt, como: User-Token : "-jwtToken-"

### GET /
Retornar as informações do usuário

Exemplo de resposta:
```json
{
    "statusMessage": "Sucesso",
    "data" : {
        "username" : "",
        "lastname" : "",
        "birth_day" : "",
        "registration_date" : "",
        "categories": []
    }
}
```

### POST /categories
Adicionar uma nova categoria 

Requer um corpo JSON com o seguinte campo:
 -   `newCategory`

Exemplo de resposta : 

```json
{
    "statusMessage" : "Sucesso"
}

```

#### Caso o token passado no cabeçalho sejá invalido ou não corresponda a um usuário, será retornado alguma dessas respostas : 

```json
{
    "statusMessage" : "Token de usuário inexistente"
}
```
```json
{
    "statusMessage" : "Erro na conversão ou token inválido"
}
```
