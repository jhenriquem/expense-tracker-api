import { Router } from "express";
import expensesBaseModel from "../../models/expensesModel";
import postController from "../../controllers/expensesControllers/postController";
import putController from "../../controllers/expensesControllers/putController";
import deleteController from "../../controllers/expensesControllers/deleteController";
import categoryValidator from "../../middlewares/categoryValidator";

const expensesRoute = Router()

// Route responsible for returning all expenses
expensesRoute.get("/", async (req, res) => {
  const id = req.body.userId
  const ress = await expensesBaseModel.findOne({ _id: id })
  res.json(ress)
})

// Route responsible for adding a new expense
expensesRoute.post("/", categoryValidator, postController)

// Route responsible for updating an expense
expensesRoute.put("/", putController)

// Route responsible for deleting an expense
expensesRoute.delete("/", deleteController)

export default expensesRoute
