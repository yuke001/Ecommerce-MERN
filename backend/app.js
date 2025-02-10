import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import productRouter from "./routes/productRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";

/// Config
dotenv.config();

// Database connection
db();

// Express app
let app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/v1/products", productRouter);

//global error handler
app.use(errorHandler);

export default app;
