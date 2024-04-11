import { Request, Response } from "express";

import db from "../services/dbService";

export const searchUsers = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const users = await db.query("SELECT * FROM users");
    res.send(users);
  } catch (error) {
    res.status(500).send({ message: "Error fetching users" });
  }
};

export const getUserByUsername = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const username = req.params.username;
    const user = await db.query("SELECT * FROM users WHERE username = ?;", [
      username
    ]);
    if (!user || user.length === 0) {
      res.status(404).send({ error: "User not found" });
      return;
    }
    res.send(user[0]);
  } catch (error) {
    res.status(500).send({ message: "Error fetching user" });
  }
};

export const getProfile = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = req.session.user;
    if (!user) {
      res.status(404).send({ error: "User not found" });
      return;
    }
    res.send({ loggedIn: true, user });
  } catch (error) {
    res.status(500).send({ message: "Error fetching profile" });
  }
};
