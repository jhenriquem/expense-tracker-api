import { Schema, model } from "mongoose";

import { expensesI } from "../types/expensesType";
const expensesSchema = new Schema<expensesI>({
  title: String,
  description: String,
  category: String,
  value: Number,
  date: Date,
})

const expensesBaseSchema = new Schema({
  _id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  expenses: [expensesSchema]
})

const expensesBaseModel = model("Expenses", expensesBaseSchema)
export default expensesBaseModel

