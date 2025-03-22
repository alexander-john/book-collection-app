import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env

// Optionally, you can validate required variables here
if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
  console.error("Missing required environment variables. Please check your .env file.");
  process.exit(1);
}
