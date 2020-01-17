import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/style.css";

function LogOut() {
  return (
    <div className="contentaligncenter">
      <h1>You Have Been Logged Out.....</h1>
      <Link to="/">
        <input
          type="button"
          className="btn btn-primary lobtnstyle"
          value="Home"
        />
      </Link>
    </div>
  );
}

export default LogOut;
