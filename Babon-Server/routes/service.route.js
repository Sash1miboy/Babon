import express from "express";
import {
    createService, 
    deleteService, 
    getService, 
    getServices
} from "../controllers/service.controller.js";
import {verifyToken} from "../middleware/jwt.js";

const router = express.Router();

router.post("/", verifyToken, createService)
router.delete("/:id", verifyToken, deleteService)
router.get("/single/:id", verifyToken, getService)
router.get("/", verifyToken, getServices)

export default router;