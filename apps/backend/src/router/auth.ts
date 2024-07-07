import dotenv from "dotenv";
import { Router, Request, Response } from "express";
import jwt from "jsonwebtoken";
import passport from "passport";
import { db } from "../db";
dotenv.config();
const PORT = process.env.PORT;
const CLIENT_URL = "http://localhost:5173/game/random";
const JWT_SECRET = process.env.JWT_SECRET || "secret";
const router = Router();

interface User {
  id: string;
}

router.get("/refresh", async (req: Request, res: Response) => {
  if (req.user) {
    const user = req.user as User;

    const userDb = await db.user.findFirst({
      where: {
        id: user.id,
      },
    });
    const token = jwt.sign({ userId: user.id }, JWT_SECRET);

    res.json({ token, id: user.id, name: userDb?.name });
  } else {
    res.status(401).json({ success: false, message: "Unauthorized" });
  }
});

router.get("/login/failed", (req: Request, res: Response) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

router.get("/logout", (req: Request, res: Response) => {
  req.logout((err) => {
    if (err) {
      console.error("Error logging out:", err);
      res.status(500).json({ error: "Failed to log out" });
    } else {
      res.clearCookie("jwt");
      res.redirect(`http://localhost:5173/`);
    }
  });
});

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: CLIENT_URL,
    failureRedirect: "/login/failed",
  })
);

export default router;
