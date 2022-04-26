import React from "react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addTodo } from "../redux/todoSlice";
import { v4 as uuidv4 } from "uuid";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

export const AddTodo = () => {
  const [newTodo, setNewTodo] = useState("");
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = () => {
    if (newTodo === "") {
      setOpen(true);
    } else {
      const todo = {
        id: uuidv4(),
        description: newTodo,
        active: true,
      };
      dispatch(addTodo(todo));
      document.getElementById("input").value = "";
    }
  };

  return (
    <div className="add-todo-box">
      <p> Create a todo here: </p>
      <textarea
        id="input"
        className="add-todo-input"
        onChange={(e) => handleChange(e)}
      ></textarea>

      <button onClick={() => handleClick()}>+</button>
      <div>
        <Snackbar
          open={open}
          onClose={handleClose}
          TransitionComponent={TransitionDown}
          message="Please give me a task name!"
          key={TransitionDown}
        />
      </div>
    </div>
  );
};

export default AddTodo;
