import { Request, Response } from "express";
import expensesBaseModel from "../../models/expensesModel";
import { expensesI } from "../../types/expensesType";

export default async function postController(req: Request, res: Response) {
  try {
    const expensesBase = new expensesBaseModel
    const { title, description, value, category } = req.body
    const data: expensesI = {
      title: title,
      description: description,
      category: category,
      value: value,
      date: new Date()
    }
    expensesBase.expenses.push(data)
    expensesBase.save()
    return res.status(201).json({
      statusMessage: "Success adding a new expense",
    })
  } catch (err: any) {

  }
}
