// Middleware responsible for checking whether the category sent by the client to add a new expense exists in the list of categories corresponding to the user

import { NextFunction, Request, Response } from "express";
import userModel from "../models/userModel";

export default async function categoryValidator(req: Request, res: Response, next: NextFunction) {
  try {
    const { category, userId } = req.body

    const Exist = category || category !== ""

    const userBase = await userModel.findById(userId)

    const isValid = userBase?.categories.includes(category)

    if (!Exist || !isValid) {
      return res.status(400).json({
        statusMessage: "Non-existent category"
      })
    }
    next()
  }
  catch (err: any) {
    return res.status(500).json({
      statusMessage: "Error in the middleware responsible for checking if the category is valid",
      data: {
        errorMessage: err.message,
      }
    })
  }
}
