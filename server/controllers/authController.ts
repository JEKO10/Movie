import bcrypt from "bcrypt";
import { Request, Response } from "express";

import db from "../services/dbService";
import { generateToken } from "../services/jwtService";

export const signup = async (req: Request, res: Response): Promise<void> => {
  try {
    let { username, email, password } = req.body;
    username = username.trim();
    email = email.trim();
    password = password.trim();

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?);",
      [username, email, hashedPassword]
    );

    res.status(200).send({ message: "User registered successfully!" });
  } catch (error) {
    res.status(500).send({ message: "Error registering user" });
  }
};

export const login = async (req: Request, res: Response): Promise<void> => {
  try {
    let { identifier, password } = req.body;
    identifier = identifier.trim();
    password = password.trim();
    let sqlQuery: string;

    if (/\S+@\S+\.\S+/.test(identifier)) {
      sqlQuery = "SELECT * FROM users WHERE email = ?;";
    } else {
      sqlQuery = "SELECT * FROM users WHERE username = ?;";
    }

    const result = await db.query(sqlQuery, [identifier]);

    if (result.length === 0) {
      res.status(404).send({ message: "User not found" });
      return;
    }

    const user = result[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).send({ message: "Invalid credentials" });
      return;
    }

    const token = generateToken({
      email: user.email,
      username: user.username
    });

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000
    });

    req.session.user = user;
    res.send({ message: "Login successful", user });
  } catch (error) {
    res.status(500).send({ message: "Error logging in" });
  }
};

export const logout = async (req: Request, res: Response): Promise<void> => {
  try {
    res.clearCookie("token");
    req.session.destroy();
    res.send({ message: "Logout successful" });
  } catch (error) {
    res.status(500).send({ message: "Error logging out" });
  }
};
