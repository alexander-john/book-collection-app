import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateBook } from "../booksAPI";
import { InputField } from "../components/InputField";

const Update = () => {
    const [book, setBook] = useState({
        title: "",
        desc: "",
        price: 0,
        cover: "",
    });

    const [error, setError] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();

    const bookId = location.pathname.split("/")[2];

    const handleChange = (e) => {
        setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        e.preventDefault();

        try {
            await updateBook(bookId, book);
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
            <h1>Update the Book</h1>

            {bookFields.map((field) => (
                <InputField
                    key={field.name}
                    field={field}
                    onChange={handleChange}
                />
            ))}

            <button onClick={handleClick}>Update</button>

            {error && "Something went wrong!"}
            
            <Link to="/">See all books</Link>
        </div>
    );
};

export default Update;
