import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
import "./JumboTron.css";
import styled from "styled-components";
import { Nav } from "react-bootstrap";
import {
  AiOutlineShop,
  AiOutlineHeart,
  AiOutlineShopping
} from "react-icons/ai";

import { Link } from "react-router-dom";

const Styles = styled.div`
  a,
  .nav-link {
    text-decoration: none;
    color: black;

    &:hover {
      color: gray;
    }
  }
`;

export const JumboTron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <Nav variant="tabs" className="ml-auto">
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <Link to="/Wishlist">
                <AiOutlineHeart className="heart" /> WISH LIST
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <Link to="/Shoppinglist">
                <AiOutlineShopping className="shopping-bag" /> SHOPPING LIST
              </Link>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-">
              <Link to="/Marketlocater">
                <AiOutlineShop className="shop" /> NEAR SHOPS
              </Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Jumbo>
  </Styles>
);
