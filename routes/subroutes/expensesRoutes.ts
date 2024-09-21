import { Router } from "express";
import expensesBaseModel from "../../models/expensesModel";
import postController from "../../controllers/expensesControllers/postController";
import putController from "../../controllers/expensesControllers/putController";
import deleteController from "../../controllers/expensesControllers/deleteController";
import categoryValidator from "../../middlewares/categoryValidator";

const expensesRoute = Router()

// Route responsible for returning all expenses
expensesRoute.get("/", async (req, res) => {
  try {


    const id = req.body.userId
    const response = await expensesBaseModel.findOne({ _id: id })
    return res.status(200).json({
      statusMessage: "Success",
      data: response
    })
  } catch (err: any) {
    return res.status(500).json({
      statusMessage: "Error when trying to return all expenses",
      data: {
        error: err.message
      }
    })
  }
})

// Route responsible for adding a new expense
expensesRoute.post("/", categoryValidator, postController)

// Route responsible for updating an expense
expensesRoute.put("/", putController)

// Route responsible for deleting an expense
expensesRoute.delete("/", deleteController)

export default expensesRoute
