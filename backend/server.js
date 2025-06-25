import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();
const app = express();

// This MiddleWare will allow application to use JSON
app.use(express.json());

app.use("/auth", userRoutes);

app.use("/", userRoutes);


/**
 * Server listen to port 5000
 */
app.listen(5000, () => {
  connectDB();
  console.log("server is running on port 5000");
});
