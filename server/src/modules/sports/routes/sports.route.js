import { Router } from "express";
import { getSports, getSlots, getPricing } from "../controllers/sports.controller.js";
const router = Router();

// Publicly accessible sports and slot availability
router.get("/", getSports);
router.get("/slots", getSlots);
router.get("/pricing", getPricing);
export default router;
