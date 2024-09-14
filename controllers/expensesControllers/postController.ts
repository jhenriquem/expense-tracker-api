import { Request, Response } from "express";
import expensesBaseModel from "../../models/expensesModel";
import { expensesI } from "../../types/expensesType";

export default async function postController(req: Request, res: Response) {
  try {
    const { title, description, value, category, userId } = req.body

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

    const data: expensesI = {
      title: title,
      description: description,
      category: category,
      value: value,
      date: new Date()
    }

    const expensesBase = await expensesBaseModel.findOne({ _id: userId })
    expensesBase?.expenses.push(data)
    expensesBase?.save()

    return res.status(201).json({
      statusMessage: "Success adding a new expense",
    })

  } catch (err: any) {
    return res.status(500).json({
      statusMessage: "Error when trying to adding a new expense",
      data: {
        errorMessage: err.message,
      }
    })
  }
}
