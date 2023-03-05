import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/todos")
      .then((response) => response.json())
      .then((todos) => setTodos(todos));
  }, []);

  const handleDelete = (id) => {
    console.log("deleted", id);
    fetch(`http://localhost:9292/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setTodos(todos.filter((todo) => todo.id !== id));
        } else {
          throw new Error("Something went wrong while deleting the blog.");
        }
      })
      .catch((error) => {
        console.log(error);
      });
    alert("deleted successfully");
  };

  return (
    <div className="container">
      {todos.map((todo, id) => (
        <ul key={id}>
          <li>{todo.title}</li>
          <li>{todo.description}</li>
          <li>{todo.due_date}</li>
          <Link to={`/to-do/${todo.id}`} className="btn btn-secondary">
            Edit
          </Link>{" "}
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(todo.id)}
          >
            Delete
          </button>
          <Link to={`/to-do/${todo.id}`} className="btn btn-primary">
            View
          </Link>
        </ul>
      ))}
    </div>
  );
};
export default TodoList;
