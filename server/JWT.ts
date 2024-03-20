import jwt from "jsonwebtoken";

export const createTokens = ({ id }: { id: number }) => {
  const accessToken = jwt.sign({ id }, "secret", {
    expiresIn: 3 * 24 * 60 * 60
  });

  return accessToken;
};

// const id = result[0].id;
// const token = jwt.sign({ id }, "secret", {
//   expiresIn: 3 * 24 * 60 * 60
// });
// res.json({ auth: true, token, result });
