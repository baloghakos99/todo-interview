import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import CreateTodo from "./pages/CreateTodo";
import UpdateTodo from "./pages/UpdateTodo";
import Enter from "./pages/Enter";
import { Main } from "./pages/Main";
import SortTodos from "./pages/SortTodos";
import "./style/style.css";

const URL_BASE = "http://localhost:1999";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Enter />
        </Route>
        <Route path="/create-todo">
          <CreateTodo />
        </Route>
        <Route
          path="/update-todo/:id"
          render={(props) => <UpdateTodo {...props} />}
        />

        <Route path="/home">
          <Main />
        </Route>
        <Route path="/items">
          <SortTodos />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
