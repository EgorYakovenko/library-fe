import { deleteBook, updateBook } from "../../api";
import { useState } from "react";
import UpdateBookForm from "../updateBookForm/updateBookForm";

export default function BooksList({ results }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  // const [isBorrowed, setIsBorrowed] = useState("inPresence");
  const handleEditClick = (book) => {
    setSelectedBook(book);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedBook(null);
  };

  return (
    <>
      <h2>Список книг</h2>
      <ul>
        {results.map((result) => (
          <li key={result.isbn}>
            <div>
              <p>Назва: {result.title}</p>
              <p>Автор: {result.author}</p>
              <p>Код: {result.isbn}</p>
              {result.isBorrowed ? <p>В наявности</p> : <p>Позичена</p>}
            </div>
            <div>
              <button onClick={() => deleteBook(result.isbn)}>Видалити</button>
              <button onClick={() => handleEditClick(result)}>
                Редагувати
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <div className="modal">
          <UpdateBookForm
            book={selectedBook}
            updateBook={updateBook}
            closeModal={handleModalClose}
          />
        </div>
      )}
    </>
  );
}
