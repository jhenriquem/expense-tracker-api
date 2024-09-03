import mongoose from "mongoose";

export default async function ConnectionDB() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`)
    console.log("Database connection successful");
  } catch (err: any) {
    console.error("Database connection error:", err.message);
    throw new Error(err.message);
  }
}
