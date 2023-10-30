import BookShow from "./BookShow";

function BookList({ books, deleteBook ,editBook}) {
  const renderedBooks = books.map((book) => {
    return <BookShow id={book.id} book={book} deleteBook={deleteBook} editBook={editBook} />;
  });
  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
