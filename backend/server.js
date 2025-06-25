import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import coinRoute from './routes/coinRoute.js'

dotenv.config();
const app = express();

// This MiddleWare will allow application to use JSON
app.use(express.json());


// Authwnticaation Route
app.use("/auth", authRoutes);

// Crypto News Logic Route
app.use("/", coinRoute )



// Admin Routes (Testing)
app.use("/", authRoutes);


/**
 * Server listen to port 5000
 */
app.listen(5000, () => {
  connectDB();
  console.log("server is running on port 5000");
});
