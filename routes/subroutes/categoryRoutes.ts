import { Router } from "express";
import userModel from "../../models/userModel";

const categoryRoute = Router()

categoryRoute.get("/", async (req, res) => {
  try {
    const { userId } = req.body
    const userBase = await userModel.findById(userId)
    return res.status(200).json({ statusMessage: "Sucesso", data: userBase?.categories })
  } catch (err: any) {
    return res.status(500).json({
      statusmessage: "Erro ao retornar as categorias",
      data: {
        error: err.message
      }
    })
  }
})

categoryRoute.post("/", async (req, res) => {
  try {
    const { newCategory, userId } = req.body
    const isValid = newCategory && newCategory !== ""

    if (!isValid) {
      return res.status(400).json({
        statusMessage: "Categoria inválida ou inexistente"
      })
    }

    const userBase = await userModel.findById(userId)
    userBase?.categories.push(newCategory)
    userBase?.save()

    return res.status(200).json({ statusMessage: "Sucesso" })
  } catch (err: any) {
    return res.status(500).json({
      statusmessage: "Erro ao adicionar uma nova categoria ",
      data: {
        error: err.message
      }
    })
  }
})

export default categoryRoute
