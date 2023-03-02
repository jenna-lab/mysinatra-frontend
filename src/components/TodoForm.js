import "../App.css";

const TodoForm = () => {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input
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
        <input type="date" className="form-control" id="dueDate" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <input
          type="text"
          className="form-control"
          id="category"
          placeholder="Category"
        />
      </div>
      <div className="mb-3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </div>
  );
};

export default TodoForm;
