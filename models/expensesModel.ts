import { Schema, model } from "mongoose";

import { expensesBaseI, expensesI } from "../types/expensesType";
const expensesSchema = new Schema<expensesI>({
  title: String,
  description: String,
  category: String,
  value: Number,
  date: Date,
}, {
  _id: true,
})

const expensesBaseSchema = new Schema<expensesBaseI>({
  _id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  expenses: [expensesSchema]
})

const expensesBaseModel = model<expensesBaseI>("Expenses", expensesBaseSchema)
export default expensesBaseModel

