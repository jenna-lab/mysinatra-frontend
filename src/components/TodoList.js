import { useEffect, useState } from "react";

const TodoList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("")
      .then((response) => response.json())
      .then((blogs) => {
        return setBlogs(blogs);
      });
  });

  return (
    <div className="container">
      <h2>TodoList</h2>
      <input type="text" />
      {blogs.map((blog) => (
        <ul>
          <li>{blog.title}</li>
          <li>{blog.description}</li>
          <li>{blog.due_date}</li>
          <button className="btn btn-primary">View Todo</button>{" "}
          <button className="btn btn-danger">Delete Todo</button>
        </ul>
      ))}
    </div>
  );
};

export default TodoList;
