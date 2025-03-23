import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/AddPage";
import Books from "./pages/BooksPage";
import Update from "./pages/UpdatePage";

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
