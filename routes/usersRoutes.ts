import { Router } from "express";
import specificUserRoute from "./specificUserRoutes";
import validateData from "../middlewares/validateData";
import checkUserAlreadyExists from "../middlewares/checkUserAlreadyExists";
import registerController from "../controllers/registerController";
import emailValidator from "../middlewares/emailValidator";
import authController from "../controllers/authController";
import userIDValidator from "../middlewares/userIDValidator";

const usersRoute = Router()

// Route responsible for adding new users
usersRoute.post("/", validateData, checkUserAlreadyExists, registerController)

// Route responsible for authenticating a user
usersRoute.post("/auth", validateData, emailValidator, authController)

// Routes related to a specific user
usersRoute.use("/:userId", userIDValidator, specificUserRoute)

export default usersRoute
