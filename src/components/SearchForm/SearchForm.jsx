import { useState } from "react";
import { searchBooks } from "../../api.js";
import css from "./SearchForm.module.css";

export default function SearchForm() {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [results, setResults] = useState([]);

  const handleIsbnChange = (event) => {
    setIsbn(event.target.value);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const query = isbn || title;
      const data = await searchBooks(query);
      setResults(data);
    } catch (error) {
      console.error("Error searching for books:", error);
    }
  };

  return (
    <div className={css.container}>
      <h2> Пошук книги</h2>
      <input
        className={css.input}
        type="number"
        placeholder="За кодом ISBN"
        value={isbn}
        onChange={handleIsbnChange}
      />
      <input
        className={css.input}
        type="text"
        placeholder="За назвою"
        value={title}
        onChange={handleTitleChange}
      />
      <button className={css.input} type="button" onClick={handleSearch}>
        Пошук
      </button>

      <div>
        <h3>Результати пошуку:</h3>
        <ul>
          {results.map((book) => (
            <li key={book.id}>
              <p>Назва: {book.title}</p>
              <p>Автор: {book.author}</p>
              <p>Код: {book.isbn}</p>
              {book.isBorrowed ? <p>В наявности</p> : <p>Позичена</p>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
