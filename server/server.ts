import dotenv from "dotenv";
import express from "express";
import mysql from "mysql";

const app = express();
dotenv.config();
const PORT = process.env.VITE_APP_PORT || 3001;
const db = mysql.createPool({
  user: process.env.VITE_APP_dbUser,
  host: process.env.VITE_APP_dbHost,
  password: process.env.VITE_APP_dbPassword,
  database: process.env.VITE_APP_dbDatabase
});

db.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL!");
    connection.release();
  }
});

app.listen(PORT, () => {
  console.log("Working on " + process.env.VITE_APP_PORT);
});
