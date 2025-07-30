import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import coinRoute from './routes/coinRoute.js'
import cors from 'cors';

dotenv.config();
const app = express();

app.use(cors())

// This MiddleWare will allow application to use JSON
app.use(express.urlencoded({extended: true}))
app.use(express.json());




// Authwnticaation Route
app.use("/auth", authRoutes);

// Crypto  Logic Route
app.use("/", coinRoute )


// Admin Routes (Testing)
app.use("/", authRoutes);

app.use("/check", example)

function example(req, res){
  return res.status(200).json({message: "bla and bla"})
}

/**
 * Server listen to port 5000
 */
app.listen(5000, () => {
  connectDB();
  console.log("server is running on port 5000");
});
