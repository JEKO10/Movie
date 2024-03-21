import { sign, verify } from "jsonwebtoken";

// declare module "express-serve-static-core" {
//   interface Request {
//     user: string | JwtPayload | undefined;
//   }
// }

// export const createTokens = ({ id }: { id: number }) => {
//   const accessToken = sign({ id }, "secret", {
//     expiresIn: 3 * 24 * 60 * 60
//   });

//   return accessToken;
// };

// // export const validateToken = (
// //   req: Request,
// //   res: Response,
// //   next: NextFunction
// // ) => {
// //   const accessToken = req.header("Authorization");

// //   if (!accessToken)
// //     return res.status(400).json({ error: "User not authenticated!" });

// //   try {
// //     const validToken = verify(accessToken, "secret") as JwtPayload;

// //     req.userId = validToken.userId;
// //     next();

// //     // if (validToken) {
// //     //   req.authenticated = true;
// //     //   return next();
// //     // }
// //   } catch (err) {
// //     return res.status(400).json({ error: err });
// //   }
// // };

// // export function authenticateToken(
// //   req: Request,
// //   res: Response,
// //   next: NextFunction
// // ) {
// //   const token = req.header("Authorization");
// //   if (!token) return res.status(401).json({ error: "Authentication failed" });

// //   verify(token, "secret", (err, user) => {
// //     if (err) return res.status(403).json({ error: "Token is not valid" });
// //     req.user = user;
// //     next();
// //   });
// // }
