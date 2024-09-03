import { Router } from "express";

const expensesRoute = Router()

// Route responsible for returning all expenses
expensesRoute.get("/", (req, res) => {
  res.json(req.url)
})

// Route responsible for adding a new expense
expensesRoute.post("/", (req, res) => {
  res.json(req.url)
})

export default expensesRoute
