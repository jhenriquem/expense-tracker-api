import { NextFunction, Request, Response } from "express";

export default function validateData(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body

    const isValid = Object.values(data).every((value) => value !== "")

    if (!isValid) {
      return res.status(400).json({
        statusMessage: "Invalid data"
      })
    }
    next()
  }
  catch (err: any) {
    return res.status(500).json({
      statusMessage: "Error in data verification middleware",
      data: {
        errorMessage: err.message,
      }
    })
  }
}
