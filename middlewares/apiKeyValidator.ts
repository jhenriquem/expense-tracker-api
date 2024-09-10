import { NextFunction, Request, Response } from "express";

export default async function apiKeyValidator(req: Request, res: Response, next: NextFunction) {
  try {
    const autheader = req.headers["authorization"]
    const Key = autheader?.split(" ")[1]

    if (Key !== process.env.API_KEY || !autheader) {
      return res.status(401).json({
        statusMessage: "Unauthorized"
      })
    }
    next()
  } catch (err: any) {
    console.log(`Error in the middleware responsible for validating the api key -> ${err.message}`)
    return res.status(500).json({
      statusMessage: "Error in the middleware responsible for validating the api key",
      data: {
        errorMessage: err.message
      }
    })
  }
}
