import { Request, Response } from "express";
import expensesBaseModel from "../../models/expensesModel";

export default async function putController(req: Request, res: Response) {
  try {
    const { title, description, value, category, _id, userId } = req.body

    const isValid = () => {
      const Exists = title && description && value && category ? true : false
      const isNull = title !== "" && description !== "" && value !== "" && category !== ""

      if (!Exists || !isNull) {
        return false
      }
    }

    if (!isValid) {
      return res.status(400).json({
        statusMessage: "Invalid or non-existent data",
      })
    }

    const expenseBase = await expensesBaseModel.findOne({ _id: userId })

    expenseBase?.expenses.id(_id)?.set({
      "title": title,
      "description": description,
      "category": category,
      "value": value,
      "date": new Date()
    })
    expenseBase?.save()

    return res.status(200).json({
      statusMessage: "Success updating an expense",
    })
  } catch (err: any) {
    return res.status(500).json({
      statusMessage: "Error when trying to update an expense",
      data: {
        errorMessage: err.message,
      }
    })

  }

}
