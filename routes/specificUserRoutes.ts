import { Router } from "express";
import timeRoute from "./subroutes/timeRoutes";
import categoryRoute from "./subroutes/categoryRoutes";
import expensesRoute from "./subroutes/expensesRoutes";

const specificUserRoute = Router()

specificUserRoute.get("/", (req, res) => {
  res.json(req.originalUrl)
})
// Responsible for times related filters
specificUserRoute.use("/filters/time", timeRoute)

// Responsible for returning all expenses corresponding to a category
specificUserRoute.use("/filters/category/:categoryName", (req, res) => {
  res.json(req.url)
})

// Responsible for adding and returning the expenses
specificUserRoute.use("/expenses", expensesRoute)

// Responsible for adding and returning the categorys
specificUserRoute.use("/category", categoryRoute)

export default specificUserRoute
