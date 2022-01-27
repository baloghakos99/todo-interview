import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { setName } from "../redux/todoSlice";

const Enter = () => {
  const [username, setUsername] = useState("");
  const dispatch = useDispatch();
  const [message, setMessage] = useState("Please enter your name!");

  const handleChange = (e) => {
    setUsername(e.target.value);
    if (username.length === username.split(" ").length - 1) {
    } else {
      setMessage("");
    }
    if (e.target.value === "") {
      setMessage("Please enter your name!");
    }
  };

  const handleClick = (e) => {
    if (username.length === username.split(" ").length - 1) {
      setMessage("Please enter your name!");
    } else dispatch(setName(username));
  };

  return (
    <div className="enter-box">
      <input className="name-input" onChange={(e) => handleChange(e)}></input>
      <Link to="/home">
        {message === "Please enter your name!" ? (
          ""
        ) : (
          <button className="name-button" onClick={() => handleClick()}>
            Enter Name
          </button>
        )}
      </Link>
      <div className="message-box">{message}</div>
    </div>
  );
};

export default Enter;
