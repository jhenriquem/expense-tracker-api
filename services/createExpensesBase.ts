//This function creates a document in the database (MongoDB) related to the new user's expenses, where all of his/her expenses will be stored.

//This document will have the same _id as the user (passed as a parameter in the function call).
import mongoose from "mongoose";
import expensesBaseModel from "../models/expensesModel";
import { expensesBaseI } from "../types/expensesType";

export default async function createExpensesBase(_id: mongoose.Types.ObjectId) {
  try {
    const data: expensesBaseI = {
      _id: _id,
      expenses: []
    }
    const expensesBase = new expensesBaseModel(data)
    await expensesBase.save()
    return { status: true }
  }
  catch (err: any) {
    return { status: false, message: err.message }
  }
}
