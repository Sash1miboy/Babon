import express from "express";
import {
    createChats,
    getChats,
    getSingleChat,
    updateChats,
} from "../controllers/chats.controller.js"
import {verifyToken} from "../middleware/jwt.js"

const router = express.Router();

router.get("/", verifyToken, getChats);
router.post("/", verifyToken, createChats);
router.get("/single/:id", verifyToken, getSingleChat);
router.put("/:id", verifyToken, updateChats);

export default router;