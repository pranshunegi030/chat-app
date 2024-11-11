import express from "express";
import dotenv from "dotenv";
import dbConnect from "./DB/dbConnect.js";
import authRouter from "./rout/authUser.js";
import messageRouter from "./rout/messageRout.js";
import cookieParser from "cookie-parser";
import userRouter from "./rout/userRout.js";
import { app, server } from "./Socket/socket.js";
import path from "path";

const __dirname = path.resolve();

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/message", messageRouter);
app.use("/api/user", userRouter);

app.use(express.static(path.join(__dirname, "/frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

app.get("/", (req, res) => {
  res.send("Server is working");
});

const PORT = process.env.PORT;
server.listen(PORT, () => {
  dbConnect();
  console.log(`Server running on port ${PORT}`);
});