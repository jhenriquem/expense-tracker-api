// Middleware responsible for validating the email, checking for the presence of @ and ., among other things. I used the deep-email-validator library

import validate from "deep-email-validator";
import { NextFunction, Request, Response } from "express";

export default async function emailValidator(req: Request, res: Response, next: NextFunction) {

  try {
    const { email } = req.body
    const validationRes = await validate(`${email}`)

    if (!validationRes.valid) {
      return res.status(400).json({
        statusMessage: "E-mail inválido"
      })
    }
    next()
  }
  catch (err: any) {
    return res.status(500).json({
      statusMessage: "Erro ao validar o e-mail",
      data: {
        errorMessage: err.message,
      }
    })
  }
}
