import http from "http";
import app from "./app.js";
import dotenv from "dotenv";
import db from "./config/db.js";

dotenv.config();

const PORT = process.env.PORT || 8000;

let server = http.createServer(app);

server.listen(PORT, () => {
  console.log(
    `Server is running on http://localhost:${PORT} in ${process.env.NODE_ENV} mode.`
  );
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  console.error("Shutting down the server due to unhandled rejection.");

  server.close(() => {
    process.exit(1);
  });
});


// handle uncaughtException
process.on("uncaughtException", (err) => {
    console.error(`Uncaught Exception: ${err.message}`);
    console.error("Shutting down the server due to uncaught exception.");
    process.exit(1);
});

