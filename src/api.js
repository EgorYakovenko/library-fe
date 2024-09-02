import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/api";

export const getAllBooks = async () => {
  const response = await axios.get("/books");
  //   console.log(response);
  return response.data;
};

export const createBook = async (newBook) => {
  const response = await axios.post("/books", newBook);
  return response.data;
};

export const deleteBook = async (isbn) => {
  const response = await axios.delete(`/books/${isbn}`);
  return response.data;
};

export const updateBook = async (isbn, editedFields) => {
  const response = await axios.put(`/books/${isbn}`, editedFields);
  return response.data;
};

export const borrowBook = async (isbn) => {
  const response = await axios.patch(`/books/${isbn}/borrow`);
  return response.data;
};

// export const searchBooks = async (query) => {
//   const response = await axios.get("/books/search", {
//     params: { query },
//   });
//   return response.data;
// };

export const searchBooks = async (query) => {
  if (!query) return [];
  const response = await axios.get("/books/search", {
    params: { query },
  });
  return response.data;
};
