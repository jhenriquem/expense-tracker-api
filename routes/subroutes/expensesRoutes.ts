import { Router } from "express";
import expensesBaseModel from "../../models/expensesModel";

const expensesRoute = Router()

// Route responsible for returning all expenses
expensesRoute.get("/", async (req, res) => {
  const id = req.body.userId
  const ress = await expensesBaseModel.findOne({ _id: id })
  res.json(ress)
})

// Route responsible for adding a new expense
expensesRoute.post("/",)
// Route responsible for updating an expense
expensesRoute.put("/",)
// Route responsible for deleting an expense
expensesRoute.delete("/",)

export default expensesRoute
