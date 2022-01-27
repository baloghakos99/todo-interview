import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../redux/todoSlice";

function UpdateTodo(props) {
  const todos = useSelector((state) => state.todo.todos);
  const id = useLocation().pathname.split("/")[2];
  const [description, setDescription] = useState(false);

  const [actualTodo, setActualTodo] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setDescription(e.target.value);
  };

  const editTodo = () => {
    dispatch(
      updateTodo({
        id: actualTodo.id,
        active: actualTodo.active,
        description: description,
      })
    );
  };

  useEffect(() => {
    setActualTodo(todos.find((x) => x.id === id));
  }, []);

  return (
    <div className="update-todo-box">
      <h1>Update todo</h1>
      <p>Todo description:</p>
      <textarea
        onChange={(e) => handleChange(e)}
        defaultValue={actualTodo.description}
      ></textarea>

      <Link className="link" to="/home">
        <button classname="update-button" onClick={() => editTodo()}>
          Update Todo
        </button>
      </Link>
    </div>
  );
}

export default UpdateTodo;
