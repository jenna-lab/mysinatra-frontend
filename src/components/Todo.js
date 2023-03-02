const Todo = () => {
  return (
    <div className="container">
      <p>Todo</p>
      <p>Category</p>
      <p>Due date</p>
      <p>Description</p>
      <button className="btn btn-secondary">Edit</button>{" "}
      <button className="btn btn-danger">Delete</button>{" "}
      <button className="btn btn-primary">Submit</button>
    </div>
  );
};

export default Todo;
