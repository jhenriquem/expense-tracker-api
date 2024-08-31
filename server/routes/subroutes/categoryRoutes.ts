import { Router } from "express";

const categoryRoute = Router()

// Route responsible for returning all categorys
categoryRoute.get("/", (req, res) => {
  res.json(req.url)
})

// Route responsible for adding new category
categoryRoute.post("/", (req, res) => {
  res.json(req.url)
})

export default categoryRoute
