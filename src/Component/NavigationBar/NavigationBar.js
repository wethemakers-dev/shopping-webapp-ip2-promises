import React from "react";
import { Link } from "react-router-dom";

import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import "./NavigationBar.css";

const Styles = styled.div`
  .navbar {
    background-color: #537d91;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    text-decoration: none;

    color: #fff4e4;

    &:hover {
      color: white;
    }
  }
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">LOGO</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/Share">SHARE</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
);
