import { NextFunction, Request, Response } from "express";
import userModel from "../models/userModel";

export default async function checkUserAlreadyExists(req: Request, res: Response, next: NextFunction) {
  try {
    const { email } = req.body

    const isValid = email !== ""

    const alreadyExists = await userModel.findOne({ "credentials.email": email })

    if (!isValid || alreadyExists) {
      return res.status(404).json({
        statusMessage: "Esse usuário já existe"
      })
    }
    next()
  } catch (err: any) {
    return res.status(500).json({
      statusMessage: "Erro ao verificar se o usuário já existe",
      data: {
        errorMessage: err.message,
      }
    })

  }
}
