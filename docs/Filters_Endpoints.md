<h1 align="center"> ⌛ 🔖 Endpoints relacionados aos filtros das despesas</h1>
<h3 align="center"> 🚩 api/users/account/filters</h3>

## ⌛ Filtragem por tempo 
### GET /time/days/:start.:end
Retornar despesas criadas em um período de tempo

Requer dois parâmetros : 
- `start` : date inicial, exemplo : 2024-08-23
- `end` : date final, exemplo : 2024-09-10


### GET /time/month/:month
Retornar despesas criadas em um mês

Requer um parâmetros : 
- `month` : número do mês, exemplo : 08


### GET /time/year/:year
Retornar despesas criadas em um ano

Requer um parâmetros : 
- `year` : ano , exemplo : 2024


##  🔖 Filtragem por categoria
### GET /category/:categoryName
Retornar despesas relacionadas a uma determinada categoria 

Requer um parâmetros : 
- `categoryName` : nome da categoria , exemplo : Electronics



Todas as rotas retornaram a mesma interface de resposta
Exemplo: 
```json
{
    "statusMessage" : "Sucesso",
    "data" : []
}

```


