// app/api/login.ts
import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
// import connectDb from "../../../utils/connectDb"; // Adjust the path as necessary
// import User from "../../../models/User"; // Adjust the path as necessary

type Data = { message: string } | { token: string };

const loginHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
  const { email, password } = req.body;

  try {
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    const payload = { userId: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET || "defaultSecret", {
      expiresIn: "2h", // Token expiration time
    });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export default loginHandler;
