import { Router } from "express";
import userModel from "../../models/userModel";

const categoryRoute = Router()

// Route responsible for returning all categorys
categoryRoute.get("/", async (req, res) => {
  try {
    const { userId } = req.body
    const userBase = await userModel.findById(userId)
    return res.status(200).json({ statusMessage: "Success", data: userBase?.categories })
  } catch (err: any) {
    return res.status(500).json({
      statusmessage: "error when trying to return the category list of the user",
      data: {
        error: err.message
      }
    })
  }
})

// Route responsible for adding new category
categoryRoute.post("/", async (req, res) => {
  try {
    const { newCategory, userId } = req.body
    const isValid = newCategory && newCategory !== ""

    if (!isValid) {
      return res.status(400).json({
        statusMessage: "Invalid or non-existent new category"
      })
    }

    const userBase = await userModel.findById(userId)
    userBase?.categories.push(newCategory)
    userBase?.save()

    return res.status(200).json({ statusMessage: "Success" })
  } catch (err: any) {
    return res.status(500).json({
      statusmessage: "error when trying to adding a new category in the list of the user",
      data: {
        error: err.message
      }
    })
  }
})

export default categoryRoute
