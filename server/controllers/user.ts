// var bcrypt = require("bcryptjs");
// var jwt = require("jsonwebtoken");
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/userModel";
import { IUser } from "./interface";

const list = [];

export const logInUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log(req.body, "!req/bpdy");
  try {
    const existingUser: IUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect)
      return res.status(40).json({ message: "Invalid Credentials." });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );
    console.log(token);
    list.push(token);

    res.status(200).json({ auth: true, result: existingUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something wen't wrong" });
  }
};

export const findUser = async (req: Request, res: Response) => {
  const { email } = req.body;
  try {
    const existingUsers: IUser[] = await User.find();

    res.status(200).json(existingUsers);
  } catch (err) {
    res.status(500).json({ message: "Something wen't wrong!!!" });
  }
};
export const setUser = async (req: Request, res: Response) => {
  console.log(req.params, "req/params");
  console.log(req.body, "req/body");
};

export const signUpUser = async (req: Request, res: Response) => {
  const { email, password, userName, lastName, confirmPassword, birthDay } =
    req.body;

  try {
    const existingUser: IUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ message: "User already exist." });
    if (password !== confirmPassword)
      return res.status(400).json({ message: "Password don't match." });

    const hashedPassword = await bcrypt.hash(password, 12);
    const result = await User.create({
      email,
      password: hashedPassword,
      birthDay,
      name: `${userName} ${lastName}`,
    });
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result, token });
  } catch (err) {
    res.status(500).json({ message: "Something wen't wrong" });
  }
};
