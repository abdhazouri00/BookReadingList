import React, { useState, useEffect } from "react";
import BookEdit from "./BookEdit";
import SearchImages from "../Api";

function BookShow({ book, deleteBook, editBook }) {
  const [edit, setEdit] = useState(false);
  const [image, setImage] = useState(null);

  const handleClick = () => {
    deleteBook(book.id);
  };

  const handleEdit = () => {
    setEdit(!edit);
  };

  const editImg = (img) => {
    book.title = img;
    fetchImage();
  }

  async function fetchImage() {
    try {
      const imageUrl = await SearchImages(book.title);
      setImage(imageUrl);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchImage();  
  }, []);

  return (
    <div className="book-show">
      <img src={image} />

      {edit ? (
        <BookEdit book={book} editImg={editImg} editBook={editBook} />
      ) : (
        <h3>
          <strong>{book.title}</strong>
        </h3>
      )}

      <div className="actions">
        <button className="edit" onClick={handleEdit}>
          Edit
        </button>
        <button className="delete" onClick={handleClick}>
          X
        </button>
      </div>
    </div>
  );
}

export default BookShow;
