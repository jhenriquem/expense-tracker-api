import { hash } from "bcrypt";
import { Request, Response } from "express";
import { UserI } from "../types/UserType";
import userModel from "../models/userModel";

export default async function registerController(req: Request, res: Response) {
  try {
    const { username, lastname, birth_day, email, password } = req.body

    const passwordHash = await hash(`${password}`, 10)
    const idHash = await hash(`${username}`, 10)
    const registrationDate = new Date()

    const data: UserI = {
      _id: idHash,
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

    return res.status(201).json({
      statusMessage: "Successful"
    })
  }
  catch (err: any) {
    console.error(`Error when trying to register a new user -> ${err.message}`)
    return res.status(500).json({
      statusMessage: "Error when trying to register a new user",
      data: {
        errorMessage: err.message,
        urlRequest: req.originalUrl,
      }
    })
  }
}
