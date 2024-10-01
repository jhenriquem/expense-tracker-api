<h1 align="center"> 💲 Endpoints relacionados as despesas de um usuário</h1>
<h3 align="center"> 🚩 api/users/account/expenses</h3>

### GET / 
Retorna todas as despesas

Exemplo de resposta:
```json
{
    "statusMessage": "Sucesso",
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
    "statusMessage": "Despesa adicionada",
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
    "statusMessage" : "Categoria não correspondente com a base de dados do usuário"
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
    "statusMessage": "Despesa atualizada",
}
```

### DELETE / 
Atualizar uma despesa

Requer um corpo JSON com os seguintes campos:
 -   `_id` : id da despesa 

 Exemplo de resposta:
```json
{
    "statusMessage": "Despesa excluida",
}
```



