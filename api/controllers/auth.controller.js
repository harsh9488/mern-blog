import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (
    !username ||
    !email ||
    !password ||
    !username === "" ||
    !email === "" ||
    !password === ""
  ) {
    // return res.status(400).json({ message: "All fields are required" });
    next(errHandler(400, "All fields are required"));
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashPassword,
  });

  try {
    // to save data in database
    await newUser.save();
    res.json("Signup Successful");
  } catch (error) {
    // res.status(500).json({ message: error.message });
    next(error);
  }
};
