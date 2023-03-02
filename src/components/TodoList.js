import { useEffect, useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9292/todos")
      .then((response) => response.json())
      .then((todos) => setTodos(todos));
  }, []);

  return (
    <div className="container">
      {todos.map((todo, id) => (
        <ul key={id}>
          <li>{todo.title}</li>
          <li>{todo.description}</li>
          <li>{todo.due_date}</li>
          <button className="btn btn-secondary">Edit</button>{" "}
          <button className="btn btn-primary">Save</button>{" "}
          <button className="btn btn-danger">Delete</button>
        </ul>
      ))}
    </div>
  );
};
export default TodoList;
