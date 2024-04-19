import express from "express";
import path from "path";
import { router as userRouter } from "./routes/userRouter";
import { router as messageRouter } from "./routes/messageRouter";
export const app = express();
const cors = require("cors");
// Static files middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/message", messageRouter);
