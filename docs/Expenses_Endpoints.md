<h1 align="center"> 💲 Endpoints relacionados as despesas de um usuário</h1>
<h3 align="center"> 🚩 api/users/account/expenses</h3>

### GET / 
Retorna todas as despesas

Exemplo de resposta:
```json
{
    "statusMessage": "Success",
    "data" : {
        "_id" : "",
        "expenses": []
    }
}
```

### POST / 
Adicionar uma nova despesa, retornando-a 

Requer um corpo JSON com os seguintes campos:
 -   `title`
 -   `description`
 -   `value`
 -   `category`

 Exemplo de respostas:
```json
{
    "statusMessage": "Success adding a new expense",
    "data" : {
        "_id" :"",
        "title" : "",
        "description" : "",
        "value" : "",
        "category" : "",
        "date" : ""
    }
}
```
Caso a categoria passada não exista na lista de caretorias do usuário, será retornado essa resposta: 
```json
{ 
    "statusMessage" : "Non-existent category"
}
```


### PUT / 
Atualizar uma despesa

Requer um corpo JSON com os seguintes campos:
 -   `title`
 -   `description`
 -   `value`
 -   `category`

 Exemplo de respostas:
```json
{
    "statusMessage": "Success updating an expense",
}
```

### DELETE / 
Atualizar uma despesa

Requer um corpo JSON com os seguintes campos:
 -   `_id` : id da despesa 

 Exemplo de resposta:
```json
{
    "statusMessage": "Success in deleting an expense",
}
```



