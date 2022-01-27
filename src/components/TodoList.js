import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { removeTodo, updateTodo } from "../redux/todoSlice";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverRoundedIcon from "@mui/icons-material/DeleteForeverRounded";
export const TodoList = (todos) => {
  const [filteredTodos, setFilteredTodos] = useState(todos.todos);
  const dispatch = useDispatch();

  const deleteTodo = (todo) => {
    dispatch(removeTodo(todo));
  };

  useEffect(() => {
    setFilteredTodos(todos.todos);
  }, [todos]);

  const changeStatus = (todo) => {
    dispatch(
      updateTodo({
        id: todo.id,
        active: !todo.active,
        description: todo.description,
      })
    );
    setFilteredTodos(todos.todos);
  };

  return (
    <div>
      {filteredTodos?.map((todo) => (
        <div className={todo.active === true ? "todos" : "todos done"}>
          <div className="status" onClick={() => changeStatus(todo)}>
            {todo.active ? (
              <CircleOutlinedIcon />
            ) : (
              <CheckCircleOutlineOutlinedIcon />
            )}
          </div>
          <div className="description">{todo.description}</div>
          <div className="bottom-line">
            <div className="button-box">
              <Link to={`/update-todo/${todo.id}`}>
                <div>
                  <EditIcon />
                </div>
              </Link>
              <div onClick={() => deleteTodo(todo)}>
                <DeleteForeverRoundedIcon />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
