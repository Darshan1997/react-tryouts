import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import Login from "./components/Login";
import About from "./components/about";
import Contact from "./components/contact";
import LogOut from "./components/logout";
import { Route, Link, Switch, BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/" exact component={Login} />
          <Route path="/aboutus" exact component={About} />
          <Route path="/contactus" exact component={Contact} />.
          <Route path="/logout" exact component={LogOut} />
        </div>
      </Router>
    );
  }
}

render(<App />, document.getElementById("root"));
