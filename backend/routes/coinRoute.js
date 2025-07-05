import { Router } from "express";
import { getAllCoins } from "../controllers/cryptoCoinController.js";
import { getCryptoNewsByCoin } from "../controllers/cryptoNewsController.js";

const router = Router();

// Gets all crypto coin
router.get('/coins',  getAllCoins)
router.get('/search/:coin', getCryptoNewsByCoin)

export default router;