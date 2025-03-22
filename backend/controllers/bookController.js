import db from "../utils/db.js";

export const getBooks = (req, res, next) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) return next(err);
    res.json(results);
  });
};

export const addBook = (req, res, next) => {
  const { title, author } = req.body;
  db.query("INSERT INTO books (title, author) VALUES (?, ?)", [title, author], (err) => {
    if (err) return next(err);
    res.status(201).json({ message: "Book added successfully" });
  });
};
