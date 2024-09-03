import { Schema, model } from "mongoose";
import { basisUserExpensesI } from "../types/expensesType";

const expensesSchema = new Schema<basisUserExpensesI>({
  _id: String,
  expenses: Array
})

const expensesModel = model<basisUserExpensesI>("Expenses", expensesSchema)

