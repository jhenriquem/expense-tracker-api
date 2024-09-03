import { Router } from "express"

const timeRoute = Router()

// Route responsible for returning expenses for a specific week
timeRoute.get("/week/:start&:end", (req, res) => {
  res.json(req.url)
})

// Route responsible for returning expenses for a specific month
timeRoute.get("/month/:mm_yyyy", (req, res) => {
  res.json(req.url)
})

// Route responsible for returning expenses for a specific year
timeRoute.get("/year/:yyyy", (req, res) => {
  res.json(req.url)
})

export default timeRoute
