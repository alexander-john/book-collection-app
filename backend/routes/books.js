import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const [data] = await db.promise().query("SELECT * FROM books");
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const q = "INSERT INTO books(`title`, `desc`, `price`, `cover`) VALUES (?)";
    const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];
    const [data] = await db.promise().query(q, [values]);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const q = "DELETE FROM books WHERE id = ?";
    const [data] = await db.promise().query(q, [req.params.id]);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";
    const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];
    const [data] = await db.promise().query(q, [...values, req.params.id]);
    res.json(data);
  } catch (err) {
    next(err);
  }
});

export default router;
