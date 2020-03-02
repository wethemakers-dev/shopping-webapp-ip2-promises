import React from "react";
import styled from "styled-components";
import { GiPositionMarker } from "react-icons/gi";
import { Header } from "rsuite";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { generateMedia } from "styled-media-query";
import { FiShoppingBag, FiHeart } from "react-icons/fi";

class NavBar extends React.Component {
  render() {
    return (
      <Header>
        <Styles>
          <Nav className="nav" variant="tabs">
            <LinkContainer to="/shoppinglist">
              <Nav.Link>
                <FiShoppingBag /> My Shopping List
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/wishlist">
              <Nav.Link>
                <FiHeart /> My Wish List
              </Nav.Link>
            </LinkContainer>
            <LinkContainer className="shop" to="/marketlocater">
              <Nav.Link>
                <GiPositionMarker className="marker" /> Find A Store
              </Nav.Link>
            </LinkContainer>
          </Nav>
        </Styles>
      </Header>
    );
  }
}

export default NavBar;

const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px"
});

const Styles = styled.div`
  .shop {
    margin-left: auto;
    margin-right: 150px;
    ${customMedia.lessThan("smTablet")`
    margin-right: 10px;

    
    `}
  }

  .logo {
    width: 50px;
  }
  .nav {
    background: #2c7ff9;
    margin-bottom: 40px;
    padding: 0px 0px 0px 100px;
    border-bottom: 0;
    ${customMedia.lessThan("smTablet")`
    padding: 0px 0px 0px 0px;

    
    `}
  }

  a,
  .navbar-brand,
  .navbar-nav .nav-link {
    text-decoration: none;
    font-family: "Nunito";
    font-size: 15px;

    color: white;
    &:hover {
      color: white;
    }
    ${customMedia.lessThan("smTablet")`
    font-size: 10px;

    
    `}
  }
  .nav-link.active {
    background-color: rgb(254, 254, 254);
  }
`;
