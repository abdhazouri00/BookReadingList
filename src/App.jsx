import { useEffect, useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [term, setTerm] = useState();

  const [books, setBooks] = useState([]);

  const deleteBookById = async (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
    await axios.delete(`http://localhost:3001/books/${id}`);
  };

  const fetchBooks = async () => {
    const response = await axios.get("http://localhost:3001/books");
    setBooks(response.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const editBookById = async (id, newTitle) => {
    const response = await axios.put(`http://localhost:3001/books/${id}`, {
      title: newTitle,
    });

    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, ...response.data };
      }

      return book;
    });

    setBooks(updatedBooks);
  };


  const handleCreateBook = async (title) => {
    const response = await axios.post("http://localhost:3001/books", {
      title: title,
    });
    const newBooks = [...books, response.data];
    setBooks(newBooks);
    setTerm(title);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList
        books={books}
        deleteBook={deleteBookById}
        editBook={editBookById}
      />
      <BookCreate onCreate={handleCreateBook} />
    </div>
  );
}

export default App;
