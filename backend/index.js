import "./config.js"; // Load environment variables early
import dotenv from "dotenv";
dotenv.config(); // Load environment variables at the very top

import express from "express";
import cors from "cors";
import db from "./db.js";
import bookRoutes from "./routes/books.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/books", bookRoutes);

app.get("/", (req, res) => {
  res.json("hello");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(process.env.PORT || 8800, () => {
  console.log(`Connected to backend at http://localhost:${process.env.PORT || 8800}`);
});
