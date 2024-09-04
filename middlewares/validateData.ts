import { NextFunction, Request, Response } from "express";

export default function validateData(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body
    const Exist =
      data.email &&
        data.password &&
        data.username &&
        data.lastname &&
        data.birth_day
        ? true : false
    const isValid = Object.values(data).every((value) => value !== "")

    if (!Exist || !isValid) {
      return res.status(400).json({
        statusMessage: "Invalid or non-existent data"
      })
    }
    next()
  }
  catch (err: any) {
    console.error(`Error in data verification middleware ${err.message}`)
    return res.status(500).json({
      statusMessage: "Error in data verification middleware",
      data: {
        errorMessage: err.message,
        urlRequest: req.originalUrl,
      }
    })
  }
}
