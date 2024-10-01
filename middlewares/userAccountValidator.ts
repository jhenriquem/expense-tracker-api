import { NextFunction, Request, Response } from "express";
import userModel from "../models/userModel";
import { JwtPayload, verify } from "jsonwebtoken";

export default async function userAccountValidator(req: Request, res: Response, next: NextFunction) {
  try {
    const JWT = req.headers["user-token"]

    if (!JWT) {
      return res.status(400).json({
        statusMessage: "Token de usuário inexistente"
      })
    }

    verify(`${JWT}`, `${process.env.SECRET_KEY_JWT}`, async (err, decoded) => {
      if (err) {
        return res.status(500).json({
          statusMessage: "Erro na conversão ou token inválido"
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
    return res.status(500).json({
      statusMessage: "Erro na validação da conta do usuário",
      data: {
        errorMessage: err.message
      }
    })
  }
}
