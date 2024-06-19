import express from "express";
import { verifyToken } from "../middleware/jwt.js"
import { createOrder, getOrders, intent } from "../controllers/order.controller.js";

const router = express.Router();

router.post("/:serviceId", verifyToken, createOrder)
router.get("/", verifyToken, getOrders)
router.get("/create-payment-intent", verifyToken, intent)

export default router;