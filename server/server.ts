import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import session from "express-session";

import router from "./routes";

dotenv.config();
const app = express();
const PORT = process.env.VITE_APP_PORT || 3001;

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true
  })
);
app.use(cookieParser());
app.use(
  session({
    secret: process.env.VITE_APP_SECRET as string,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60 * 60 * 24 * 1000,
      httpOnly: true
    }
  })
);

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
