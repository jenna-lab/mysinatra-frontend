import TodoList from "./TodoList";

const Homepage = () => {
  return (
    <div className="container">
      <div className="card shadow-sm">
        <div className="card-header bg-dark text-white">
          <h3 className="card-title">
            <i className="bi bi-list-task"></i> To-Do
          </h3>
        </div>
        <div className="card-body">
          <TodoList />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
