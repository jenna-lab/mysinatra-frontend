import { Route, Routes } from "react-router-dom";
import "./App.css";
import Homepage from "./components/Homepage";
import NavBar from "./components/Navbar";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/to-do" element={<Todo />} />
        <Route path="/add-to-do" element={<TodoForm />} />
      </Routes>
    </div>
  );
}

export default App;
