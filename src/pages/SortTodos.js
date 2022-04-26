import React from "react";
import TodoList from "../components/TodoList";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const SortTodos = () => {
  const todos = useSelector((state) => state.todo.todos);

  const [radio, setRadio] = useState("All");

  const [filteredTodos, setFilteredTodos] = useState(todos);

  useEffect(() => {
    if (radio === "All") {
      setFilteredTodos(todos);
    }
    if (radio === "Done") {
      setFilteredTodos(todos.filter((todo) => todo.active === false));
    }
    if (radio === "Active") {
      setFilteredTodos(todos.filter((todo) => todo.active === true));
    }
  }, [radio, todos]);

  const radioChange = (e) => {
    setRadio(e.target.value);
  };

  return (
    <div className="sort-todos-box">
      <h1>All todos</h1>
      <form id="form">
        <div>
          <label>All</label>
          <input
            className="radio"
            type="radio"
            checked={radio === "All"}
            name="status"
            id="All"
            value="All"
            onChange={(e) => radioChange(e)}
          ></input>
          <label>Active</label>

          <input
            type="radio"
            className="radio"
            name="status"
            id="Active"
            value="Active"
            onChange={(e) => radioChange(e)}
          ></input>
          <label>Done</label>

          <input
            type="radio"
            className="radio"
            name="status"
            id="Done"
            value="Done"
            onChange={(e) => radioChange(e)}
          ></input>
        </div>
      </form>

      <TodoList todos={filteredTodos}></TodoList>
    </div>
  );
};

export default SortTodos;
