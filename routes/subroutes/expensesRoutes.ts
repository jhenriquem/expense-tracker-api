import { Router } from "express";
import expensesModel from "../../models/expensesModel";

const expensesRoute = Router()

// Route responsible for returning all expenses
expensesRoute.get("/", async (req, res) => {
  const id = req.body.userId
  const ress = await expensesModel.findOne({ _id: id })
  res.json(ress)
})

// Route responsible for adding a new expense
expensesRoute.post("/", (req, res) => {
  res.json(req.url)
})

export default expensesRoute
