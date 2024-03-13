import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mysql from "mysql";

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

app.listen(PORT, () => {
  console.log("Working on " + process.env.VITE_APP_PORT);
});
