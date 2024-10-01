import { NextFunction, Request, Response } from "express";

export default async function apiKeyValidator(req: Request, res: Response, next: NextFunction) {
  try {
    const autheader = req.headers["authorization"]
    const Key = autheader?.split(" ")[1]

    if (Key !== process.env.API_KEY || !autheader) {
      return res.status(401).json({
        statusMessage: "Não autorizado"
      })
    }
    next()
  } catch (err: any) {
    return res.status(500).json({
      statusMessage: "Erro ao validar a requisição",
      data: {
        errorMessage: err.message
      }
    })
  }
}
