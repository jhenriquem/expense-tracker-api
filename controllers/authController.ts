import { Request, Response } from "express";
import userModel from "../models/userModel";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export default async function authController(req: Request, res: Response) {
  try {
    const { email, password } = req.body
    const Exist = email && password ? true : false

    if (!Exist) {
      return res.status(400).json({
        statusMessage: "Non-existent data"
      })
    }
    const user = await userModel.findOne({ "credentials.email": email })

    const isMatch = compare(password, `${user?.credentials.password}`)

    if (!user || !isMatch) {
      return res.status(401).json({
        statusMessage: "Unauthenticated"
      });
    }

    const token = sign(
      { userId: user?._id },
      process.env.SECRET_KEY_JWT as string, { expiresIn: "1h" }
    );

    return res.status(200).json({
      statusMessage: "Authenticated",
      token: token
    })

  } catch (err: any) {
    console.error(`Error when trying to authenticate a user -> ${err.message}`)
    return res.status(500).json({
      statusMessage: "Error when trying to authenticate a user",
      data: {
        errorMessage: err.message,
      }
    })
  }
}
