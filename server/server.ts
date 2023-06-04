import express, { Express, Request, Response } from "express";
import mysql from "mysql";
import cors from "cors";
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

app.post("/create", (req: Request, res: Response) => {
  const name = req.body.name;
  const username = req.body.username;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const bio = req.body.bio;

  db.query(
    "INSERT INTO users (name, username, lastName, email, bio) VALUES (?, ?, ?, ?, ?)",
    [name, username, lastName, email, bio],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send("Radi poslato je");
    }
  );
});

app.get("/hi", (req, res) => {
  res.send("HELLO ");
});

app.listen(3001, () => {
  console.log("Radi");
});
