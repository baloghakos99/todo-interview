import React, { useEffect, useState } from "react";

import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { useSelector } from "react-redux";

export const Main = () => {
  const todos = useSelector((state) => state.todo);
  const [lastFive, setLastFive] = useState([]);

  useEffect(() => {
    setLastFive(todos.todos.slice(-5).reverse());
  }, [todos]);

  return (
    <div className="main-box">
      <h1>Hi {todos.username} !</h1>
      <AddTodo></AddTodo>
      <Link to="/items">
        <button className="alltodos-button ">See all todos</button>
      </Link>

      <TodoList todos={lastFive}></TodoList>
    </div>
  );
};

export default Main;
