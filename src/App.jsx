// import "./App.css";

import BooksList from "./components/BooksList/BooksList";
import CreateBookForm from "./components/CreateBookForm/CreateBookForm";
import SearchForm from "./components/SearchForm/SearchForm";

function App() {
  return (
    <>
      <CreateBookForm />
      <SearchForm />
      <BooksList />
    </>
  );
}

export default App;
