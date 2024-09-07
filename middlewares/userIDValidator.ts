// Middleware responsible for checking if the user ID is valid
// Used in the /api/users/:userId route

import { NextFunction, Request, Response } from "express";
import userModel from "../models/userModel";

export default async function userIDValidator(req: Request, res: Response, next: NextFunction) {
  try {

    const { userId } = req.params

    const isValid = await userModel.findOne({ _id: userId }) ? true : false

    if (isValid) {
      next()
    }
  }
  catch (err: any) {
    console.log(`Error in the middleware responsible for validating the user ID ( api/users/:userId ) -> ${err.message}`)
    return res.status(500).json({
      statusMessage: "Error in the middleware responsible for validating the user ID ( api/users/:userId )",
      data: {
        errorMessage: err.message
      }
    })
  }
}
