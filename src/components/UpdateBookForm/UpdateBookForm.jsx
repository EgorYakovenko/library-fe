import { useState } from "react";
import BorrowedCheckBox from "../BorrowedCheckBox/BorrowedCheckBox";
import css from "./UpdateBookForm.module.css";
export default function UpdateBookForm({ book, updateBook, closeModal }) {
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    isbn: book.isbn,
    isBorrowed: book.isBorrowed === "true",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    updateBook(book.isbn, formData);
    closeModal();
  };

  return (
    <>
      <div className={css.container}>
        <input
          className={css.input}
          type="text"
          name="title"
          placeholder="Назва"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          className={css.input}
          type="text"
          name="author"
          placeholder="Автор"
          value={formData.author}
          onChange={handleChange}
        />
        <input
          className={css.input}
          type="text"
          name="isbn"
          placeholder="Код"
          value={formData.isbn}
          onChange={handleChange}
          disabled
        />
        <div>
          <BorrowedCheckBox />
        </div>
      </div>
      <div>
        <button onClick={handleSave}>Зберегти</button>
        <button onClick={closeModal}>Відмінити</button>
      </div>
    </>
  );
}
