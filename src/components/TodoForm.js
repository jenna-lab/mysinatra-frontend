import "../App.css";
import { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const [due_date, setDueDate] = useState([]);
  const [category, setCategory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("clicked");
    const data = { title, description, due_date, category };
    try {
      const response = await fetch("http://localhost:9292/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      alert("Todo added successfully");
      setTitle("");
      setDescription("");
      setDueDate("");
      setCategory("");
      e.target.reset();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            id="description"
            rows="3"
            placeholder="Description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="dueDate" className="form-label">
            Due date
          </label>
          <input
            onChange={(e) => setDueDate(e.target.value)}
            type="date"
            className="form-control"
            id="dueDate"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="form-select"
            id="category"
          >
            <option value="">Select category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Family">Family</option>
          </select>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};
export default TodoForm;
