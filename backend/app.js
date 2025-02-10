import express from "express";
import dotenv from "dotenv";
import db from "./config/db.js";
import productRouter from "./routes/productRouter.js";

dotenv.config();

db();

let app = express();

// Middleware
app.use(express.json());

app.use("/api/v1/products", productRouter);

//global error handler
app.use((err, req, res, next) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || "Something went wrong!!Please try again Later";

  if (process.env.NODE_ENV === "development") {
    let message = err.message || "Something went wrong!!Please try again Later";
    return res.status(statusCode).json({
      status: "Failure",
      message,
      stack: err.stack,
      error: err,
    });
  }

  if (process.env.NODE_ENV === "production") {
    let message = err.message || "Something went wrong!!Please try again Later";

    return res.status(statusCode).json({
      status: "Failure",
      message,
    });
  }
});

export default app;
