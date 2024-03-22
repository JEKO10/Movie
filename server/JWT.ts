import { NextFunction, Request, Response } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

declare module "express" {
  interface Request {
    user?: {
      email: string;
      username: string;
      password: string;
    };
  }
}

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies.token;
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

  if (!accessTokenSecret) {
    return res
      .status(500)
      .json({ error: "Access token secret is not defined." });
  }

  try {
    const decodedToken = verify(token, accessTokenSecret) as JwtPayload;

    req.user = {
      email: decodedToken.email,
      username: decodedToken.username,
      password: decodedToken.password
    };

    next();
  } catch (err) {
    res.clearCookie("token");
  }
};
