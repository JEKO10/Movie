const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "users",
});

app.listen(3001, () => {
  console.log("Radi");
});
