import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import SearchImages from "./Api";

function App() {

  const [term, setTerm] = useState();

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });

    setBooks(updatedBooks);
  };

  const editBookById = (id, newTitle) => {
    books.map((book) => {
      if (book.id === id) {
        book.title = newTitle;
      } else {
        return book;
      }
    });
  };

  const [books, setBooks] = useState([]);

  const handleCreateBook = (title) => {
    const newBooks = [
      ...books,
      { id: Math.floor(Math.random() * 1000), title: title },
    ];
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
