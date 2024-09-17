import { Router } from "express";
import timeRoute from "./subroutes/timeRoutes";
import categoryRoute from "./subroutes/categoryRoutes";
import expensesRoute from "./subroutes/expensesRoutes";
import userModel from "../models/userModel";

const accountRoute = Router()

accountRoute.get("/", async (req, res) => {
  try {
    const { userId } = req.body
    const userBase = await userModel.findOne({ _id: userId }, { credentials: 0, _id: 0, __v: 0 })
    return res.status(200).json({
      statusMessage: "Success",
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
// Responsible for times related filters
accountRoute.use("/filters/time", timeRoute)

// Responsible for returning all expenses corresponding to a category
accountRoute.use("/filters/category/:categoryName", (req, res) => {
  res.json(req.url)
})

// Responsible for adding and returning the expenses
accountRoute.use("/expenses", expensesRoute)

// Responsible for adding and returning the categorys
accountRoute.use("/categories", categoryRoute)

export default accountRoute
