import express from "express";
import {createChat, getChat} from "../controllers/chat.controller.js"
import { verifyToken } from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createChat);
router.get("/:id", verifyToken, getChat);

export default router;
