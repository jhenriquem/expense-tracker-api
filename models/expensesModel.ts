import { Schema, model } from "mongoose";
import { basisUserExpensesI } from "../types/expensesType";

const expensesSchema = new Schema<basisUserExpensesI>({
  _id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  expenses: Array
})

const expensesModel = model<basisUserExpensesI>("Expenses", expensesSchema)
export default expensesModel

