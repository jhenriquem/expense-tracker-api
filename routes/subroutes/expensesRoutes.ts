import { Router } from "express";
import expensesBaseModel from "../../models/expensesModel";
import postController from "../../controllers/expensesControllers/postController";
import putController from "../../controllers/expensesControllers/putController";
import deleteController from "../../controllers/expensesControllers/deleteController";
import categoryValidator from "../../middlewares/categoryValidator";

const expensesRoute = Router()

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

expensesRoute.post("/", categoryValidator, postController)

expensesRoute.put("/", putController)

expensesRoute.delete("/", deleteController)

export default expensesRoute
