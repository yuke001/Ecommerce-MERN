import express from 'express'
import dotenv from 'dotenv';
import db from './config/db.js';
import productRouter from './routes/productRouter.js';

dotenv.config();

db();

let app = express()

// Middleware
app.use(express.json());

app.use("/api/v1/products", productRouter);



export default app ;