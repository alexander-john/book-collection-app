import db from "../config/db.js";

export const getBooks = (req, res, next) => {
  db.query("SELECT * FROM books", (err, results) => {
    if (err) return next(err);
    res.json(results);
  });
};

export const addBook = (req, res, next) => {
  const { title, desc, price } = req.body;
  db.query("INSERT INTO books (title, `desc`, `price`) VALUES (?, ?, ?)", [title, desc, price], (err) => { // Updated query
    if (err) return next(err);
    res.status(201).json({ message: "Book added successfully" });
  });
};

export const deleteBook = async (req, res, next) => {
  try {
    const q = "DELETE FROM books WHERE id = ?";
    const [data] = await db.promise().query(q, [req.params.id]);
    res.json(data);
  } catch (err) {
    next(err);
  }
};

export const updateBook = async (req, res, next) => {
  try {
    const q = "UPDATE books SET `title`= ?, `desc`= ?, `price`= ?, `cover`= ? WHERE id = ?";
    const values = [req.body.title, req.body.desc, req.body.price, req.body.cover];
    const [data] = await db.promise().query(q, [...values, req.params.id]);
    res.json(data);
  } catch (err) {
    next(err);
  }
};
