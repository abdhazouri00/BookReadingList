import { useState } from "react";

function BookEdit({ book, titleContent , editImg }) {
  const [inputValue, setInputValue] = useState(book.title);
  const [editing, setEditing] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    titleContent = inputValue;
    editImg(inputValue);
    setEditing(!editing);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      {editing ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            value={inputValue}
            onChange={handleChange}
          />
          <button className="button is-primary" type="submit">
            Edit
          </button>
        </form>
      ) : (
        <h3>
          <strong>{inputValue}</strong>
        </h3>
      )}
    </div>
  );
}

export default BookEdit;
