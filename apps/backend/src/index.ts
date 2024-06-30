import express from "express";
import v1Router from "./router/v1";
import dotenv from "dotenv";
import cookieSession from "cookie-session";
import passport from "passport";
import cors from "cors";
import authRoute from "./router/auth";

const app = express();

dotenv.config();

app.use(
  cookieSession({
    name: "session",
    keys: ["key1"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:5173/",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use("/auth", authRoute);
app.use("/v1", v1Router);

const PORT = process.env.PORT || 5173;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
