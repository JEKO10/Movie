import express from "express";
import mysql from "mysql";

const app = express();

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "moviexd_profile_system",
});

app.listen(3001, () => {
  console.log("Radi");
});
