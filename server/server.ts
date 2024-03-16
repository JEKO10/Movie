import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mysql, { QueryOptions } from "mysql";

const app = express();
app.use(express.json());
dotenv.config();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
  })
);
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

  db.query(
    "INSERT INTO users (username, email, password) VALUES (?, ?, ?);",
    [username, email, password],

    (err, result) => {
      if (err) {
        res.send({ message: err.sqlMessage });
      } else {
        res.status(200).send({ message: "User registered successfully!" });
      }
    }
  );
});

app.post("/login", (req, res) => {
  let { identifier, password } = req.body;
  identifier = identifier.trim();
  password = password.trim();
  let sqlQuery: string | QueryOptions;

  if (/\S+@\S+\.\S+/.test(identifier)) {
    sqlQuery = "SELECT * FROM users WHERE email = ? AND password = ?";
  } else {
    sqlQuery = "SELECT * FROM users WHERE username = ? AND password = ?";
  }

  db.query(sqlQuery, [identifier, password], (err, result) => {
    if (result.length > 0) res.send(result);
    else res.send({ message: "Your credentials don`t match!" });

    if (err) res.send({ err: err });
  });
});

app.listen(PORT, () => {
  console.log("Working on " + process.env.VITE_APP_PORT);
});
