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
        statusMessage: "Dados inexistentes"
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
      },
      categories: [
        "Mantimentos",
        "Lazer",
        "Eletrônicos",
        "Utilitários",
        "Vestuário",
        "Saúde",
        "Outros"
      ]
    }

    const registeredUser = new userModel(data)
    await registeredUser.save()

    // Criação do base da dados das despesas relacionada a esse usuário
    const response = await createExpensesBase(registeredUser._id)

    if (response.status) {
      return res.status(201).json({
        statusMessage: "Usuário cadastrado "
      })
    }
    if (!response.status) throw error(response.message);
  }
  catch (err: any) {
    return res.status(500).json({
      statusMessage: "Erro ao cadastrar o usuário",
      data: {
        errorMessage: err.message,
      }
    })
  }
}
