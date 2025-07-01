import { Router } from "express";
import { getAllCoins, getCryptoCoin } from "../controllers/cryptoNewsController.js";

const router = Router();

router.get('/',  getCryptoCoin)
router.get('/coins',  getAllCoins)

export default router;