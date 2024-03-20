import { NextFunction, Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";

export const createTokens = ({ id }: { id: number }) => {
  const accessToken = sign({ id }, "secret", {
    expiresIn: 3 * 24 * 60 * 60
  });

  return accessToken;
};

export const validateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const accessToken = req.cookies["jwt"];

  if (accessToken)
    return res.status(400).json({ error: "User not authenticated!" });

  try {
    const validToken = verify(accessToken, "secret");

    if (validToken) {
      //   req.authenticated = true;
      return next();
    }
  } catch (err) {
    return res.status(400).json({ error: err });
  }
};

// const id = result[0].id;
// const token = jwt.sign({ id }, "secret", {
//   expiresIn: 3 * 24 * 60 * 60
// });
// res.json({ auth: true, token, result });
