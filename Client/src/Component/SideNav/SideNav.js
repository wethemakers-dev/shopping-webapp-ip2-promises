import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Sidebar } from "rsuite";

import { Sidenav, Nav, Icon } from "rsuite";
import "rsuite/lib/styles/index.less";
import "rsuite/dist/styles/rsuite-default.css";

const Styles = styled.div`
  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    text-decoration: none;
    font-size: 18px;
    color: black;

    &:hover {
      color: grey;
    }
  }
`;

export const SideNav = () => (
  <Styles>
    <Sidebar>
      <Sidenav appearance="subtle">
        <Sidenav.Body>
          <Nav>
            <Nav.Item icon={<Icon icon="wishlist" />}>
              <Link to="/Wishlist"> My Wishlist</Link>
            </Nav.Item>
            <Nav.Item icon={<Icon icon="cart" />}>
              <Link to="/Shoppinglist"> My Shopping List</Link>
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </Sidebar>
  </Styles>
);
