import { Router } from "express";
import timeRoute from "./subroutes/timeRoutes";
import categoryRoute from "./subroutes/categoryRoutes";
import expensesRoute from "./subroutes/expensesRoutes";

const accountRoute = Router()

accountRoute.get("/", (req, res) => {
  res.json(req.originalUrl)
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
accountRoute.use("/category", categoryRoute)

export default accountRoute
