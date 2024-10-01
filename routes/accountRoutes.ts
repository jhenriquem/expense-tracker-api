import { Router } from "express";
import timeRoute from "./subroutes/timeRoutes";
import categoryRoute from "./subroutes/categoryRoutes";
import expensesRoute from "./subroutes/expensesRoutes";
import userModel from "../models/userModel";
import expensesBaseModel from "../models/expensesModel";

const accountRoute = Router()

accountRoute.get("/", async (req, res) => {
  try {
    const { userId } = req.body
    const userBase = await userModel.findOne({ _id: userId }, { credentials: 0, _id: 0, __v: 0 })
    return res.status(200).json({
      statusmessage: "Success",
      data: userBase
    })
  } catch (err: any) {
    return res.status(500).json({
      statusmessage: "Error when trying to return the user data",
      data: {
        error: err.message
      }
    })
  }
})

accountRoute.use("/filters/time", timeRoute)

accountRoute.use("/filters/category/:categoryName", async (req, res) => {
  try {
    const categoryName = req.params.categoryName
    const { userId } = req.body

    const expensesBase = await expensesBaseModel.findById(userId)
    const expenses = expensesBase?.expenses.filter(expense => expense.category === categoryName)
    return res.status(200).json({
      statusmessage: "Success",
      data: expenses
    })
  } catch (err: any) {
    return res.status(500).json({
      statusmessage: "Error when trying to return expenses with this category",
      data: {
        error: err.message
      }
    })
  }
})

accountRoute.use("/expenses", expensesRoute)

accountRoute.use("/categories", categoryRoute)

export default accountRoute
