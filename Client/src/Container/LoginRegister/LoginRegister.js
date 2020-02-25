import React, { Component } from "react";
import "./LoginRegister.css";

class LoginRegister extends Component {
  state = {
    userE: "",
    userPass: "",

    userEmail: "",
    userName: "",
    userPassword: ""
  };

  handleSubmit = event => {
    event.preventDefault();
    //Alter your Axios request like below
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleReg = () => {
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let z = document.getElementById("btn");

    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";

    let i = document.getElementById("reg");
    i.style.color = "white";

    let u = document.getElementById("log");
    u.style.color = "black";
  };

  handleLog = () => {
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let z = document.getElementById("btn");

    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";

    let i = document.getElementById("log");
    i.style.color = "white";

    let u = document.getElementById("reg");
    u.style.color = "black";
  };
  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="form-box">
            <div className="button-box">
              <div id="btn"></div>
              <button
                type="button"
                className="toggle-btn"
                onClick={this.handleLog}
                tabIndex="-1"
                id="log"
              >
                Log In
              </button>
              <button
                type="button"
                className="toggle-btn"
                onClick={this.handleReg}
                tabIndex="-1"
                id="reg"
              >
                Register
              </button>
            </div>

            <form id="login" className="input-group">
              <input
                type="email"
                className="inputField"
                placeholder="User Email"
                name="userE"
                value={this.state.userE}
                onChange={this.handleInput}
              />
              <input
                type="password"
                className="inputField"
                placeholder="Password"
                name="userPass"
                value={this.state.userPass}
                onChange={this.handleInput}
              />
              <button type="submit" className="submit-btn">
                Login
              </button>
            </form>

            <form id="register" className="input-group">
              <input
                type="text"
                className="inputField"
                placeholder="User Name"
                name="userName"
                value={this.state.userName}
                onChange={this.handleInput}
              />
              <input
                type="email"
                className="inputField"
                placeholder="Email"
                name="userEmail"
                value={this.state.userEmail}
                onChange={this.handleInput}
              />
              <input
                type="password"
                className="inputField"
                placeholder="Password"
                name="userPassword"
                value={this.state.userPassword}
                onChange={this.handleInput}
              />
              <button type="submit" className="submit-btn">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginRegister;
