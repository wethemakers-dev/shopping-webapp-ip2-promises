import React, { Component } from "react";
import "./LoginRegister.css";
import axios from "axios";

class LoginRegister extends Component {
  state = {
    userE: "",
    userPass: "",
    userEmail: "",
    userName: "",
    userPassword: ""
  };

  handelLogin = e => {
    e.preventDefault();

    axios
      .post("http://localhost:3001/users/loginInsert", {
        userEmail: this.state.userEmail,
        userPassword: this.state.userPassword
      })
      .then(({ data }) => {
        localStorage.setItem("userID", data._id);
        this.props.history.push("./shoppinglist");
        console.log(data);
      });
  };

  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/insert", {
        userEmail: this.state.userEmail,
        userName: this.state.userName,
        userPassword: this.state.userPassword
      })
      .then(({ data }) => {
        localStorage.setItem("userID", data._id);
        this.props.history.push("./shoppinglist");
        console.log(data);
      });
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

            <form
              id="login"
              onSubmit={this.handelLogin}
              className="input-group"
            >
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

            <form
              id="register"
              className="input-group"
              onSubmit={this.handleSubmit}
            >
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
