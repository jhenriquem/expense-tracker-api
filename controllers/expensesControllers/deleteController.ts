import { Request, Response } from "express";
import expensesBaseModel from "../../models/expensesModel";

export default async function deleteController(req: Request, res: Response) {
  try {
    const { _id, userId } = req.body

    if (!_id || _id === "") {
      return res.status(400).json({
        statusMessage: "Dados invalidos ou inexistentes",
      })
    }

    const expensesBase = await expensesBaseModel.findById(userId)
    expensesBase?.expenses.id(_id)?.deleteOne()
    expensesBase?.save()

    return res.status(200).json({
      statusMessage: "Despesa excluida",
    })

  } catch (err: any) {
    return res.status(500).json({
      statusMessage: "Erro ao excluir a despesa",
      data: {
        errorMessage: err.message,
      }

    })
  }
}
