import express from "express";
import v1Router from "./router/v1";
import dotenv from "dotenv";

import passport, { authenticate } from "passport";
import cors from "cors";
import authRoute from "./router/auth";
import { initPassport } from "./passport";
import session from "express-session";

const app = express();

dotenv.config();

app.use(
  session({
    secret: "my_secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 },
  })
);

app.use(passport.initialize());
app.use(passport.session())
initPassport();




app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);
app.use("/v1", v1Router);

const PORT = process.env.PORT || 5174;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
