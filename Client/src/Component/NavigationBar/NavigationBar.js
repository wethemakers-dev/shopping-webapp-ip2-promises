import React from "react";
import { Link } from "react-router-dom";
import { Header } from "rsuite";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../../assets/images/Untitled design.png";
import { Button } from "react-bootstrap";
import Axios from "axios";

const Styles = styled.div`
  .toggle {
    color: white;
    background-color;
  }
  .nav-btn{
    font-size: 13px;
  }
 
  .logo {
    width: 40px;
  }
  .navbar {
    background-color: #1B96F4;
    padding: 0rem 1rem
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    text-decoration: none;
    font-family: 'Nunito';

    color: black;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => {
  const logout = () => {
    localStorage.setItem("userID", null);
  };

  return (
    <Header>
      <Styles>
        <Navbar>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} to="/">
              <Button
                onClick={logout}
                className="nav-btn"
                variant="outline-light"
              >
                Log out
              </Button>
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    </Header>
  );
};
