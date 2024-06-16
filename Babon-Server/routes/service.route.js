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
router.post("/:id", verifyToken, deleteService)
router.post("/single/:id", verifyToken, getService)
router.post("/", verifyToken, getServices)

export default router;