import { Router } from "express"
import expensesBaseModel from "../../models/expensesModel"

const timeRoute = Router()

// Route responsible for returning expenses for a specific week
timeRoute.get("/days/:start-:end", async (req, res) => {
  try {
    const { userId } = req.body
    const start = new Date(req.params.start)
    const end = new Date(req.params.end)

    const expensesBase = await expensesBaseModel.findById(userId)
    const expenses = expensesBase?.expenses.filter(expense => expense.date >= start && expense.date <= end)
    return res.status(200).json({
      statusmessage: "Success",
      data: expenses
    })
  } catch (err: any) {
    return res.status(500).json({
      statusmessage: "Error when trying to return expenses with this date",
      data: {
        error: err.message
      }
    })
  }
})

// Route responsible for returning expenses for a specific month
timeRoute.get("/month/:month", async (req, res) => {
  try {
    const { userId } = req.body
    const month = new Date(req.params.month).getMonth()

    const expensesBase = await expensesBaseModel.findById(userId)
    const expenses = expensesBase?.expenses.filter(expense => expense.date.getMonth() === month)
    return res.status(200).json({
      statusmessage: "Success",
      data: expenses
    })

  } catch (err: any) {
    return res.status(500).json({
      statusmessage: "Error when trying to return expenses with this date",
      data: {
        error: err.message
      }
    })
  }
})

// Route responsible for returning expenses for a specific year
timeRoute.get("/year/:yyyy", (req, res) => {
  res.json(req.url)
})

export default timeRoute
