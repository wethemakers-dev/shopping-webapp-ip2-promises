import React from "react";
import { Link } from "react-router-dom";
import { Header } from "rsuite";

import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import { GiPositionMarker } from "react-icons/gi";
import { FiShare } from "react-icons/fi";

import logo from "../../assets/Untitled design.png";

const Styles = styled.div`
  .logo {
    width: 40px;
  }
  .navbar {
    padding: 0rem 1rem;
    background-color: #c82121;
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    text-decoration: none;
    font-size: 11px;
    color: white;

    &:hover {
      color: grey;
    }
  }
`;

export const NavigationBar = () => (
  <Header>
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">
          <img className="logo" src={logo} alt="fireSpot" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <Link to="/Marketlocater">
                  <GiPositionMarker className="shop" /> Find A Store
                </Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/Share">
                  <FiShare className="shop" />
                  Share
                </Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  </Header>
);
