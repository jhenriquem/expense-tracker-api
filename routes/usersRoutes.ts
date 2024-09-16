import { Router } from "express";
import accountRoute from "./accountRoutes";
import validateData from "../middlewares/validateData";
import checkUserAlreadyExists from "../middlewares/checkUserAlreadyExists";
import registerController from "../controllers/registerController";
import emailValidator from "../middlewares/emailValidator";
import authController from "../controllers/authController";
import userAccountValidator from "../middlewares/userAccountValidator";

const usersRoute = Router()

// Route responsible for adding new users
usersRoute.post("/", validateData, emailValidator, checkUserAlreadyExists, registerController)

// Route responsible for authenticating a user
usersRoute.post("/auth", validateData, emailValidator, authController)

// Routes related to a specific user
usersRoute.use("/account", userAccountValidator, accountRoute)

export default usersRoute
