import { NextFunction, Request, Response } from "express";
import { JwtPayload, sign, verify } from "jsonwebtoken";

interface UserPayload extends JwtPayload {
  email: string;
  username: string;
}

export const generateToken = (user: UserPayload): string => {
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;
  if (!accessTokenSecret) {
    throw new Error("Access token secret is not defined.");
  }

  return sign(user, accessTokenSecret, { expiresIn: "1h" });
};

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const token = req.cookies.token;
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

  if (!accessTokenSecret) {
    return res
      .status(500)
      .json({ error: "Access token secret is not defined." });
  }

  try {
    const decodedToken = verify(token, accessTokenSecret) as UserPayload;

    req.user = {
      email: decodedToken.email,
      username: decodedToken.username
    };

    next();
  } catch (err) {
    res.clearCookie("token");
    return res.status(401).json({ error: "Invalid token" });
  }
};
