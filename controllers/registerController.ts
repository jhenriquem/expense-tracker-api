import { hash } from "bcrypt";
import { Request, Response } from "express";
import { UserI } from "../types/UserType";
import userModel from "../models/userModel";
import createExpensesBase from "../services/createExpensesBase";
import { error } from "console";

export default async function registerController(req: Request, res: Response) {
  try {
    const { username, lastname, birth_day, email, password } = req.body
    const Exist =
      email &&
        password &&
        username &&
        lastname &&
        birth_day
        ? true : false

    if (!Exist) {
      return res.status(400).json({
        statusMessage: "Non-existent data"
      })
    }

    const passwordHash = await hash(`${password}`, 10)
    const registrationDate = new Date()

    const data: UserI = {
      username: username,
      lastname: lastname,
      birth_day: birth_day,
      registration_date: registrationDate,
      credentials: {
        email: email,
        password: passwordHash
      }
    }

    const registeredUser = new userModel(data)
    await registeredUser.save()

    //Creation of the database of expenses related to this user
    const response = await createExpensesBase(registeredUser._id)

    if (response.status) {
      return res.status(201).json({
        statusMessage: "Successful"
      })
    }
    if (!response.status) throw error(response.message);
  }
  catch (err: any) {
    console.error(`Error when trying to register a new user -> ${err.message}`)
    return res.status(500).json({
      statusMessage: "Error when trying to register a new user",
      data: {
        errorMessage: err.message,
      }
    })
  }
}
