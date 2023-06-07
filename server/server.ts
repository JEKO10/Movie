import express, { Express, Request, Response } from "express";
import mysql from "mysql";
import cors from "cors";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

const app: Express = express();

app.use(cors());
app.use(express.json());
dotenv.config();

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: process.env.VITE_MYSQL_PASS,
  database: "moviexd_profile_system",
});

app.post("/register", (req: Request, res: Response) => {
  const name = req.body.name;
  const username = req.body.username;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const bio = req.body.bio;

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) console.log(err);

    db.query(
      "INSERT INTO users (name, username, lastName, email, password, bio) VALUES (?, ?, ?, ?, ?, ?)",
      [name, username, lastName, email, hash, bio],

      (err, result) => {
        if (err) res.send({ err: err });

        res.send(result);
      }
    );
  });
});

app.post("/login", (req: Request, res: Response) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE username = ? OR email = ?",
    [username, email],
    (err, result) => {
      if (err) res.send({ err: err });

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (err, response) => {
          if (response) {
            res.send(response);
          } else {
            res.send({ message: "Your credentials don`t match." });
          }
        });
      } else {
        res.send({ message: "No user found" });
      }
    }
  );
});

app.listen(process.env.VITE_PORT, () => {
  console.log("Working on VITE_PORT");
});
