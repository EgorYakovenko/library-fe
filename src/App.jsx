import { useEffect, useState } from "react";
import { getAllBooks } from "./api";
import BooksList from "./components/BooksList/BooksList";
import CreateBookForm from "./components/CreateBookForm/CreateBookForm";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  const [booksList, setBooksList] = useState([]);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const data = await getAllBooks();
        setBooksList(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  return (
    <>
      <CreateBookForm checked={isChecked} setChecked={setIsChecked} />
      <SearchForm />
      <BooksList results={booksList} />
    </>
  );
}

export default App;
