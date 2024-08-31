import { Router } from "express";
import specificUserRoute from "./specificUserRoutes";

const usersRoute = Router()

// Route responsible for adding new users
usersRoute.post("/", (req, res) => {
  res.json(req.url)
})

// Route responsible for authenticating a user
usersRoute.post("/auth", (req, res) => {
  res.json(req.url)
})

// Routes related to a specific user
usersRoute.use("/:userId", specificUserRoute)

export default usersRoute
