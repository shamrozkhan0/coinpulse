import { Router } from "express";
import { signUp, getAllUser, login } from "../controllers/authController.js";
import { protector } from "../Middleware/authMiddleware.js";

const router = Router();

// Authentization Routes
router.post("/signup", signUp);
router.post("/login", login);



// ============ Admin Routes =============

// Get All User From Database
router.get("/users", getAllUser);

export default router;
