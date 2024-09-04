import { Router } from "express";
import specificUserRoute from "./specificUserRoutes";
import validateData from "../middlewares/validateData";
import checkUserAlreadyExists from "../middlewares/checkUserAlreadyExists";
import registerController from "../controllers/registerController";

const usersRoute = Router()

// Route responsible for adding new users
usersRoute.post("/", validateData, checkUserAlreadyExists, registerController)

// Route responsible for authenticating a user
usersRoute.post("/auth", (req, res) => {
  res.json(req.url)
})

// Routes related to a specific user
usersRoute.use("/:userId", specificUserRoute)

export default usersRoute
