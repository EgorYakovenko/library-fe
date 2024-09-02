// import css from "./SearchForm.module.css";

// export default function SearchForm() {
//   return (
//     <div className={css.container}>
//       <h2> Пошук книги</h2>
//       <input type="number" placeholder="За кодом" />
//       <input type="text" placeholder="За назвою" />
//       <button type="button">Пошук</button>
//     </div>
//   );
// }

import { useState } from "react";
import { searchBooks } from "../../api.js"; // Убедитесь, что путь корректен
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
      const query = isbn || title; // Если ISBN пустой, ищем по названию, и наоборот
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
        type="number"
        placeholder="За кодом ISBN"
        value={isbn}
        onChange={handleIsbnChange}
      />
      <input
        type="text"
        placeholder="За назвою"
        value={title}
        onChange={handleTitleChange}
      />
      <button type="button" onClick={handleSearch}>
        Пошук
      </button>

      <div>
        <h3>Результати пошуку:</h3>
        <ul>
          {results.map((book) => (
            <li key={book.id}>
              (Назва: {book.title}) (Автор: {book.author}) (ISBN: {book.isbn})
              (Наявність: {book.isBorrowed ? "Позичена" : "В наявности"})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
