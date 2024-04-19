import { Router } from "express";
import {
  createMessage,
  getMessage,
  getMessageChatbox,
  getMessageListById,
} from "../constrollers/messageController";

export const router = Router();
router.get("/", getMessage);
router.get("/:id&:selectedId", getMessageChatbox);
router.get("/list/:id", getMessageListById);
router.post("/", createMessage);
