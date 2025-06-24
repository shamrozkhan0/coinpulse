import express from "express";
import { createUser , getAllUser } from "../controllers/UserController.js";

const router = express.Router();

// This will create User
router.post("/user", createUser);

// ============ Admin Routes =============

// Get All User From Database
router.get("/users", getAllUser);

export default router;
