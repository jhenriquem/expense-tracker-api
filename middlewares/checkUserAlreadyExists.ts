import { NextFunction, Request, Response } from "express";
import userModel from "../models/userModel";

export default async function checkUserAlreadyExists(req: Request, res: Response, next: NextFunction) {
  try {
    const { email } = req.body

    const isValid = email !== ""

    const alreadyExists = await userModel.findOne({ "credentials.email": email })

    if (!isValid || alreadyExists) {
      return res.status(404).json({
        statusMessage: "The user already exists"
      })
    }
    next()
  } catch (err: any) {
    console.error(`Error in the middleware that checks if the user already exists ${err.message}`)
    return res.status(500).json({
      statusMessage: "Error in the middleware that checks if the user already exists",
      data: {
        errorMessage: err.message,
        urlRequest: req.originalUrl,
      }
    })

  }
}
