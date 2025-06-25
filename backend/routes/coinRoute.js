import { Router } from "express";
import { cryptoNews } from "../controllers/cryptoNewsController.js";

const router = Router();

router.get('/',  cryptoNews)

export default router;