import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/todoSlice";
import { v4 as uuidv4 } from "uuid";

export const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todos);

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleClick = () => {
    const todo = {
      id: uuidv4(),
      description: newTodo,
      active: true,
    };
    dispatch(addTodo(todo));
  };

  return (
    <div className="add-todo-box">
      <p> Create a todo here: </p>
      <textarea
        className="add-todo-input"
        onChange={(e) => handleChange(e)}
      ></textarea>

      <button onClick={() => handleClick()}>+</button>
    </div>
  );
};

export default AddTodo;
