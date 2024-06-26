import { Router } from "express";
import {
  createUser,
  getUserById,
  getUsers,
} from "../constrollers/userController";

export const router = Router();
router.get("/", getUsers);
router.get("/:id", getUserById);
router.post("/", createUser);
