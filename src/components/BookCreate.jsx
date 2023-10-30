import { useState } from "react";

function BookCreate({ onCreate }) {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h2>Add a Book</h2>

      <form onSubmit={handleSubmit}>
        <label>Title</label>

        <input className="input" type="text" value={title} onChange={handleChange} />

        <button className="button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default BookCreate;
