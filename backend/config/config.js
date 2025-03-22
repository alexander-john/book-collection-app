import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 8800;
export const DB_CONFIG = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
