import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { GiPositionMarker } from "react-icons/gi";

import "rsuite/dist/styles/rsuite-default.css";

import { Nav } from "rsuite";

const Styles = styled.div`
  .shop {
  }
  .nav {
    margin-bottom: 50px;
    background: #f27267;
  }
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    text-decoration: none;
    font-size: 18px;
    font-family: "Muli";
    color: white;
    &:hover {
      color: black;
    }
  }
`;

class NavBar extends React.Component {
  render() {
    return (
      <Styles>
        <Nav className="nav">
          <Nav.Item>
            <Link to="/Shoppinglist"> My Shopping List</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/Wishlist"> My Wishlist</Link>
          </Nav.Item>
          <Nav.Item>
            <Link to="/Marketlocater">
              <GiPositionMarker className="shop" /> Find A Store
            </Link>
          </Nav.Item>
        </Nav>
      </Styles>
    );
  }
}

export default NavBar;
