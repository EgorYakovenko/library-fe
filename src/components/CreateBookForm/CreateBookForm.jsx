import { useState } from "react";
import { createBook } from "../../api.js";
import BorrowedCheckBox from "../BorrowedCheckBox/BorrowedCheckBox.jsx";
import css from "./CreateBookForm.module.css";

export default function CreateBookForm({ checked, setChecked }) {
  const [newBook, setNewBook] = useState({
    isbn: "",
    title: "",
    author: "",
    isBorrowed: checked,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await createBook(newBook);
      console.log("Book added:", res);
    } catch (error) {
      console.error("Error adding book:", error);
    }
  };

  const handleCheckboxChange = (event) => {
    const isBorrowed = !event.target.checked;
    setChecked(event.target.checked);
    setNewBook({
      ...newBook,
      isBorrowed,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.container}>
        <h1>Додати книгу</h1>
        <input
          className={css.input}
          type="text"
          name="isbn"
          placeholder="isdn"
          value={newBook.isdn}
          onChange={handleChange}
        />
        <input
          className={css.input}
          type="text"
          name="title"
          placeholder="Назва"
          value={newBook.title}
          onChange={handleChange}
        />
        <input
          className={css.input}
          type="text"
          name="author"
          placeholder="Автор"
          value={newBook.author}
          onChange={handleChange}
        />
        <div>
          <BorrowedCheckBox
            checked={checked}
            handleCheckboxChange={handleCheckboxChange}
          />
        </div>
        <button className={css.input} type="submit">
          Додати
        </button>
      </div>
    </form>
  );
}
