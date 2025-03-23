import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./features/books/pages/AddBook";
import Books from "./features/books/pages/BookList";
import Update from "./features/books/pages/UpdateBook";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
