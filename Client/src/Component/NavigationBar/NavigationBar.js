import React from "react";
import { Link } from "react-router-dom";
import { Header } from "rsuite";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import logo from "../../assets/images/Untitled design.png";
import { Button } from "react-bootstrap";

const Styles = styled.div`
  .shop {
    margin-left: 100px;
  }
  .logo {
    width: 50px;
  }
  .navbar {
    padding: 0rem 1rem;
    background-color: #2ca3a5;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    text-decoration: none;
    font-size: 11px;
    font-family: "Muli";

    color: black;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Header>
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img className="logo" src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Link to="/Share">
                <Button variant="light">Share</Button>
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/">
                <Button variant="outline-light" className="shop">
                  Log out
                </Button>
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  </Header>
);
