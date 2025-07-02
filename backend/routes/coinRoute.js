import { Router } from "express";
import { getAllCoins } from "../controllers/cryptoCoinController.js";
import { getInputSearch } from "../controllers/cryptoNewsController.js";

const router = Router();

// Gets all crypto coin
router.get('/coins',  getAllCoins)
router.get('/search/:coin', getInputSearch)


export default router;