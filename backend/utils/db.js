import mysql from "mysql2";
import { DB_CONFIG } from "../config/config.js";

const db = mysql.createConnection(DB_CONFIG);

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }
  console.log("Connected to the database.");
});

export default db;
