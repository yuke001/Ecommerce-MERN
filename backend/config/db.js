import mongoose from "mongoose";

async function db() {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB : ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Error: ${error.message}`);
    console.error(
      "Shutting down the server due to database connection failure."
    );
    process.exit(1); //  Exit the process immediately
  }
}

export default db;
