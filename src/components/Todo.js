// const Todo = () => {
//   return (
//     <div className="container">
//       <p>Todo</p>
//       <p>Category</p>
//       <p>Due date</p>
//       <p>Description</p>
//       <button className="btn btn-secondary">Edit</button>{" "}
//       <button className="btn btn-primary">Save</button>{" "}
//       <button className="btn btn-danger">Delete</button>
//     </div>
//   );
// };

// export default Todo;

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from "@material-ui/core";
const Todo = () => {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [due_date, setDueDate] = useState("");

  useEffect(() => {
    fetch(`http://localhost:9292/todos/${id}`)
      .then((response) => response.json())
      .then((data) => setTodo(data))
      .catch((error) => console.log(error));
  }, [id]);
  const handleOpen = () => {
    setTitle(todo.title);
    setDescription(todo.description);
    setDueDate(todo.due_date);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    // Save the changes to the backend
    fetch(`http://localhost:9292/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        description: description,
        due_date: due_date,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Update the todo state with the changes
        setTodo(data);
        handleClose();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h1>Todo</h1>
      {todo ? (
        <>
          <p>Title: {todo.title}</p>
          <p>Description: {todo.description}</p>
          <p>Category: {todo.category_id}</p>
          <p>DueDate: {todo.due_date}</p>

          <Button variant="contained" color="secondary" onClick={handleOpen}>
            Edit
          </Button>
        </>
      ) : (
        <span className="loader"></span>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            fullWidth
          />
          <TextField
            margin="dense"
            label="Description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            fullWidth
            multiline
            rows={4}
          />
          <TextField
            margin="dense"
            label="DueDate"
            value={due_date}
            onChange={(event) => setDueDate(event.target.value)}
            fullWidth
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default Todo;
