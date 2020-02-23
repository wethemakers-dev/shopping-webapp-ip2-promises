import React, { Component } from "react";
import "./LoginRegister.css";

class LoginRegister extends Component {
  state = {
    userE: "",
    userPass: "",
    userEmail: "",
    userName: "",
    userPassword: "",
    errors: {
      userE: "",
      userPass: "",
      userEmail: "",
      userName: "",
      userPassword: ""
    }
  };

  checkEmptyLogin = () => {
    if (this.state.userE === "" && this.state.userPass === "") {
      alert("Hey, you must enter the email & the password!");
    } else if (this.state.userE !== "" && this.state.userPass === "") {
      alert("Hey, you must enter the password!");
    } else if (this.state.userE === "" && this.state.userPass !== "") {
      alert("Hey, you must enter the email!");
    }
  };

  checkEmptyRegister = () => {
    if (
      this.state.userEmail === "" &&
      this.state.userPassword === "" &&
      this.state.userName === ""
    ) {
      alert("Hey, you must enter the user name & the email & the password!");
    } else if (
      this.state.userEmail !== "" &&
      this.state.userPassword === "" &&
      this.state.userName === ""
    ) {
      alert("Hey, you must enter the user name & the password!");
    } else if (
      this.state.userEmail === "" &&
      this.state.userPassword !== "" &&
      this.state.userName === ""
    ) {
      alert("Hey, you must enter the user name & the user email");
    } else if (
      this.state.userEmail === "" &&
      this.state.userPassword === "" &&
      this.state.userName !== ""
    ) {
      alert("Hey, you must enter the user email & the password");
    } else if (
      this.state.userEmail === "" &&
      this.state.userPassword !== "" &&
      this.state.userName !== ""
    ) {
      alert("Hey, you must enter the user email");
    } else if (
      this.state.userEmail !== "" &&
      this.state.userPassword === "" &&
      this.state.userName !== ""
    ) {
      alert("Hey, you must enter the user password");
    } else if (
      this.state.userEmail !== "" &&
      this.state.userPassword !== "" &&
      this.state.userName === ""
    ) {
      alert("Hey, you must enter the user name");
    } else if (this.state.userPassword.length < 7) {
      alert("Hey, The password must be at least 8 characters long");
    }
  };

  handleInput = e => {
    this.handleEmpty(e);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleEmpty = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let errors = this.state.errors;

    switch (name) {
      case "userE":
        errors.userE = value === "" ? "You must enter the email!" : "";
        break;
      case "userPass":
        errors.userPass = value === "" ? "You must enter the password" : "";
        break;
      case "userName":
        errors.userName = value === "" ? "You must enter the user name" : "";
        break;
      case "userEmail":
        errors.userEmail = value === "" ? "You must enter the user email" : "";
        break;
      case "userPassword":
        errors.userPassword =
          value === ""
            ? "You must enter the password!"
            : value.length < 8
            ? "password must be at least 8 characters long"
            : "";
        break;
      default:
        break;
    }
  };

  handleReg = () => {
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let z = document.getElementById("btn");

    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  };

  handleLog = () => {
    let x = document.getElementById("login");
    let y = document.getElementById("register");
    let z = document.getElementById("btn");

    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
  };
  render() {
    let { errors } = this.state;
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
              >
                Log In
              </button>
              <button
                type="button"
                className="toggle-btn"
                onClick={this.handleReg}
              >
                Register
              </button>
            </div>

            <form action="loginInsert" id="login" className="input-group">
              <input
                type="text"
                className="inputField"
                placeholder="User Email"
                name="userE"
                value={this.userE}
                onChange={this.handleInput}
              />
              <span className="errorMessage">{errors.userE}</span>
              <input
                type="text"
                className="inputField"
                placeholder="Password"
                name="userPass"
                value={this.userPass}
                onChange={this.handleInput}
              />
              <span className="errorMessage">{errors.userPass}</span>
              <button
                type="submit"
                className="submit-btn"
                onClick={this.checkEmptyLogin}
              >
                Login
              </button>
            </form>

            <form action="registerInsert" id="register" className="input-group">
              <input
                type="text"
                className="inputField"
                placeholder="User Name"
                name="userName"
                value={this.userName}
                onChange={this.handleInput}
              />
              <span className="errorMessage">{errors.userName}</span>
              <input
                type="email"
                className="inputField"
                placeholder="Email"
                name="userEmail"
                value={this.userEmail}
                onChange={this.handleInput}
              />
              <span className="errorMessage">{errors.userEmail}</span>
              <input
                type="text"
                className="inputField"
                placeholder="Password"
                name="userPassword"
                value={this.userPassword}
                onChange={this.handleInput}
              />
              <span className="errorMessage">{errors.userPassword}</span>
              <button
                type="submit"
                className="submit-btn"
                onClick={this.checkEmptyRegister}
              >
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
