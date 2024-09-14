import mongoose from "mongoose"

export interface expensesBaseI {
  _id: mongoose.Types.ObjectId
  expenses: expensesI[]
}

export interface expensesI {
  title: String
  description: String
  category: String
  value: Number
  date: Date
}
