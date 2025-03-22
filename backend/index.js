import "./config/config.js"; // Load environment variables early
import dotenv from "dotenv";
dotenv.config(); // Load environment variables at the very top

import express from "express";
import cors from "cors";
import helmet from "helmet";
import bookRoutes from "./routes/books.js";
import errorHandler from "./middlewares/errorHandler.js";

const app = express();
app.use(cors());
app.use(helmet());
app.use(express.json());

// Validate required environment variables
if (!process.env.PORT) {
  console.error("Error: PORT environment variable is not set.");
  process.exit(1);
}

app.use("/books", bookRoutes);

app.get("/", (req, res) => {
  res.json("hello");
});

// Add a health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "UP" });
});

// Error handling middleware
app.use(errorHandler);

// Handle 404 errors
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

// Graceful shutdown
const server = app.listen(process.env.PORT || 8800, () => {
  console.log(`Connected to backend at http://localhost:${process.env.PORT || 8800}`);
});

process.on("SIGINT", () => {
  console.log("Shutting down server...");
  server.close(() => {
    console.log("Server closed.");
    process.exit(0);
  });
});
