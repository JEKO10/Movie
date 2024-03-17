import bcrypt from "bcrypt";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mysql, { QueryOptions } from "mysql";

const app = express();
app.use(express.json());
dotenv.config();
app.use(cors());
const PORT = process.env.VITE_APP_PORT || 3001;

const db = mysql.createPool({
  user: process.env.VITE_APP_dbUser,
  host: process.env.VITE_APP_dbHost,
  password: process.env.VITE_APP_dbPassword,
  database: process.env.VITE_APP_dbDatabase
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL: ", err);
  } else {
    console.log("Connected to MySQL!");
    connection.release();
  }
});

app.post("/signup", (req, res) => {
  let { username, email, password } = req.body;
  username = username.trim();
  email = email.trim();
  password = password.trim();

  bcrypt.hash(password, 10, (err, hash) => {
    if (err) console.log(err);

    db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?);",
      [username, email, hash],

      (err) => {
        if (err) {
          res.send({ message: err.sqlMessage });
        } else {
          res.status(200).send({ message: "User registered successfully!" });
        }
      }
    );
  });
});

app.post("/login", (req, res) => {
  let { identifier, password } = req.body;
  identifier = identifier.trim();
  password = password.trim();
  let sqlQuery: string | QueryOptions;

  if (/\S+@\S+\.\S+/.test(identifier)) {
    sqlQuery = "SELECT * FROM users WHERE email = ?;";
  } else {
    sqlQuery = "SELECT * FROM users WHERE username = ?;";
  }

  db.query(sqlQuery, [identifier], (err, result) => {
    if (err) res.send({ err: err });

    if (result.length > 0) {
      bcrypt.compare(password, result[0].password, (err, response) => {
        if (response) {
          res.send(result);
        } else {
          res.send({ message: "Your credentials don`t match!" });
        }
      });
    } else {
      res.send({ message: "User doesn't exist!" });
    }
  });
});

app.listen(PORT, () => {
  console.log("Working on " + process.env.VITE_APP_PORT);
});
