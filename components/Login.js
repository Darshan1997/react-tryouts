import React, { Component } from "react";
import NavBar from './NavBar'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  componentDidMount() {
    console.log("componentdidmopunt called...");
  }

  authenticate = e => {
    e.preventDefault();
    console.log(this.state);
  };

  inputFieldHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    let containerCss = {
      marginTop: "25px"
    };

    return (
      <React.Fragment>
      <NavBar/>
        <div className="container" style={containerCss}>
          <form onSubmit={this.authenticate}>
            <div className="form-group">
              <label>UserName :</label>
              <input
                type="text"
                id="username"
                name="username"
                className="form-control"
                onChange={this.inputFieldHandler}
              />
            </div>
            <div className="form-group">
              <label>Password :</label>
              <input
                type="text"
                id="password"
                name="password"
                className="form-control"
                onChange={this.inputFieldHandler}
              />
            </div>
            <div>
              <input type="submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
