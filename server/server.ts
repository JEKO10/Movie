import express, { Express, Request, Response } from "express";
import mysql from "mysql";
import cors from "cors";
import bcrypt from "bcrypt";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";

const app: Express = express();

app.use(express.json());
dotenv.config();
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(
  session({
    secret: process.env.VITE_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 24 * 1000,
    },
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

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

app.get("/login", (req, res) => {
  if (req.session.cookie) {
    res.send({ loggedIn: true, cookie: req.session.cookie });
  } else {
    res.send({ loggedIn: false });
  }
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
            req.session.cookie = result;
            // console.log(req.session.cookie);
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
