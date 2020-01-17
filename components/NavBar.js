import React, { Component } from "react";
import { Link } from "react-router-dom";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark">
      <Link to="/">
        <a className="navbar-brand" >
          <span style={{ color: "white" }}>DemoApp</span>
        </a>
        </Link>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/aboutus">
              <a className="nav-link">
                <span style={{ color: "white" }}>AboutUs</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/contactus">
              <a className="nav-link">
                <span style={{ color: "white" }}>ContactUs</span>
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/logout">
              <a className="nav-link">
                <span style={{ color: "white" }}>Logout</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
