import { NextFunction, Request, Response } from "express";
import userModel from "../models/userModel";
import { JwtPayload, verify } from "jsonwebtoken";
import { JsonWebKey } from "crypto";

export default async function userAccountValidator(req: Request, res: Response, next: NextFunction) {
  try {
    const autheader = req.headers["authorization"]
    const JWT = autheader?.split(" ")[2]

    verify(`${JWT}`, `${process.env.SECRET_KEY_JWT}`, async (err, decoded) => {
      if (err) {
        return res.status(500).json({
          statusMessage: "Error converting token"
        })
      }
      const isValid = await userModel.findOne({ _id: (decoded as JwtPayload).userId }) ? true : false
      if (isValid) {
        req.body.userId = (decoded as JwtPayload).userId
        next()
      }
    })

  }
  catch (err: any) {
    console.log(`Error in the middleware responsible for validating the user account ( api/users/account) -> ${err.message}`)
    return res.status(500).json({
      statusMessage: "Error in the middleware responsible for validating the user account ( api/users/account )",
      data: {
        errorMessage: err.message
      }
    })
  }
}
