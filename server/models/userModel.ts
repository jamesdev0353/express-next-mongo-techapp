import mongoose from "mongoose";
import { IUser } from "./interface";
const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  birthDay: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
});

export default mongoose.model<IUser>("User", userSchema);
