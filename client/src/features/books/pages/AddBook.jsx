import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createBook } from "./booksAPI";

const Add = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: null,
        cover: "",
    });
    const [error, setError] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await createBook(book);
            navigate("/");
        } catch (err) {
            console.log(err);
            setError(true);
        }
    };

    const bookFields = [
        { type: "text", placeholder: "Book title", name: "title" },
        {
            type: "text",
            placeholder: "Book desc",
            name: "desc",
            isTextArea: true,
        },
        { type: "number", placeholder: "Book price", name: "price" },
        { type: "text", placeholder: "Book cover", name: "cover" },
    ];

    return (
        <div className="form">
            <h1>Add New Book</h1>

            {bookFields.map((field) =>
                field.isTextArea ? (
                    <textarea
                        key={field.name}
                        rows={5}
                        placeholder={field.placeholder}
                        name={field.name}
                        onChange={handleChange}
                    />
                ) : (
                    <input
                        key={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        name={field.name}
                        onChange={handleChange}
                    />
                )
            )}

            <button onClick={handleClick}>Add</button>
            {error && "Something went wrong!"}
            <Link to="/">See all books</Link>
        </div>
    );
};

export default Add;
