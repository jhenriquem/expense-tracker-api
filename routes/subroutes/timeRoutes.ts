import { Router } from "express"
import expensesBaseModel from "../../models/expensesModel"

const timeRoute = Router()

timeRoute.get("/days/:start.:end", async (req, res) => {
  try {
    const { userId } = req.body
    const start = new Date(req.params.start)
    const end = new Date(req.params.end)

    const expensesBase = await expensesBaseModel.findById(userId)
    const expenses = expensesBase?.expenses.filter(expense => expense.date >= start && expense.date <= end)
    return res.status(200).json({
      statusmessage: "Sucesso",
      data: expenses
    })
  } catch (err: any) {
    return res.status(500).json({
      statusmessage: "Erro ao buscar despesas com essa data",
      data: {
        error: err.message
      }
    })
  }
})

timeRoute.get("/month/:month", async (req, res) => {
  try {
    const { userId } = req.body
    const month = new Date(req.params.month).getMonth()

    const expensesBase = await expensesBaseModel.findById(userId)
    const expenses = expensesBase?.expenses.filter(expense => expense.date.getMonth() === month)
    return res.status(200).json({
      statusmessage: "Sucesso",
      data: expenses
    })

  } catch (err: any) {
    return res.status(500).json({
      statusmessage: "Erro ao buscar despesas com essa data",
      data: {
        error: err.message
      }
    })
  }
})

timeRoute.get("/year/:year", async (req, res) => {
  try {
    const { userId } = req.body
    const year = req.params.year

    const expensesBase = await expensesBaseModel.findById(userId)
    const expenses = expensesBase?.expenses.filter(expense => `${expense.date.getFullYear()}` === year)
    return res.status(200).json({
      statusmessage: "Sucesso",
      data: expenses
    })

  } catch (err: any) {
    return res.status(500).json({
      statusmessage: "Erro ao buscar despesas com essa data",
      data: {
        error: err.message
      }
    })
  }
})

export default timeRoute
