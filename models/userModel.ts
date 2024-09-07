import { model, Schema } from "mongoose";

import { UserI } from "../types/UserType";

const userSchema = new Schema<UserI>({
  username: String,
  lastname: String,
  birth_day: Date,
  registration_date: Date,
  credentials: {
    email: String,
    password: String
  }
})
const userModel = model<UserI>("User", userSchema)

export default userModel
