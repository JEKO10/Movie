import express, { Express, Request, Response } from "express";
import mysql from "mysql";
import cors from "cors";

const app: Express = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
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
      res.send("Radi posalto je");
    }
  );
});

app.listen(3001, () => {
  console.log("Radi");
});
