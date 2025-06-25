import express from "express";
import { signUp, getAllUser, login } from "../controllers/UserController.js";

const router = express.Router();

// This will create User
router.post("/signup", signUp);
router.post("/login", login);

// ============ Admin Routes =============

// Get All User From Database
router.get("/users", getAllUser);

export default router;
