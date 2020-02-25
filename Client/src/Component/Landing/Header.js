import React, { Component } from "react";
import logo from "../../assets/images/Untitled design.png";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { generateMedia } from "styled-media-query";

class Header extends Component {
  render() {
    return (
      <HeaderContainer className="header-container">
        <div className="header-top">
          <Link to="/Shoppinglist">
            <Logo className="logo" src={logo} />
          </Link>
          <Link to="/LoginRegister" className="signIn-btn">
            Sign In
          </Link>
        </div>
        <div className="header-content">
          <Title>Plan Your Home</Title>
          <SubTitle>Prepare your home for best</SubTitle>
          <Link to="/LoginRegister">
            <Button className="main-offer-btn" primary>
              try it now
            </Button>
          </Link>
        </div>
      </HeaderContainer>
    );
  }
}
export default Header;

// Media
const customMedia = generateMedia({
  lgDesktop: "1350px",
  mdDesktop: "1150px",
  tablet: "960px",
  smTablet: "740px"
});

// Logo
const Logo = styled.img`
  width: 4rem;
  height: 4rem;
  position: absolute;
  top: 30%;
  left: 10%;
  transform: translate(-50%, -50%);
  margin-left: 0;
  ${customMedia.lessThan("tablet")`
    left: 20%;
  `}
`;

const HeaderContainer = styled.header`
.Icon svg {
  vertical-align: bottom !important;
  margin-left: 1.5rem;
  ${customMedia.lessThan("smTablet")`
    display: none !important;
  `}
}
  .signIn-btn {
    text-decoration: none;
    background: #fd5e53;
    color: white;
    right: 0;
    margin: 1.125rem 3% 0;
    padding: 0.4375rem 1.0625rem;
    font-wight: 400;
    line-height: normal;
    border-radius: 0.1875rem;
    font-size: 1rem;
    position: absolute;
    translate: transform(-50%, -50%);
    cursor: pointer;
    transition: background 0.2s ease-in; 
    &:hover {
      background: #1089ff;
      color: white;

    }
    ${customMedia.lessThan("smTablet")`
      margin-top: 1.25rem;
      right: 5%;
    `}
  }
  // Header Top
  .header-top {
    position: relative;
    height: 10rem;
    z-index: 2;
    color: white;

  }
  // Header Content
  .header-content {
    width: 65%
    color: white;
    position: relative;
    margin: 4.5rem auto 0;
    display: flex;
    justify-content: center;
    align-content: center;
    text-align: center;
    flex-direction: column;
    z-index: 2;
    ${customMedia.lessThan("smTablet")`
      display: grid;
      grid-template-rows: repeat(3, 60px);
      margin-top: 8rem;
    `}
    // Lg Main
    .main-offer-btn {
      ${customMedia.lessThan("lgDesktop")`
      margin: 0 33%;
      font-size: 1.5rem;
    `}
    
      ${customMedia.lessThan("mdDesktop")`
      margin: 0 25%;
      font-size: 1.5rem;
      `}
    
      ${customMedia.lessThan("tablet")`
        margin: 0 20%;
        font-size: 1.3rem;
      `}
    }
  }
`;

// Main Title
const Title = styled.h1`
  margin: 0 0 1.2rem;
  font-size: 5rem;
  font-weight: 700;
  line-height: 1.1em;
  color: white;

  ${customMedia.lessThan("tablet")`
    font-size: 2.6rem;
    color: white;

  `}
`;

// SubTitle
const SubTitle = styled.h2`
  font-weight: 400;
  font-size: 1.875rem;
  line-height: 1.25em;
  margin: 0 0 1.875rem;
  color: white;

  ${customMedia.lessThan("smTablet")`
   font-size: 1.4rem;
   margin: 0;
   color: white;

  `}
`;

const Button = styled.button`
  display: inline-block;
  background: #fd5e53;
  text-transform: uppercase;
  border: none;
  outline: none;
  margin: ${props => (props.primary ? "0 33%" : "0")};
  padding: ${props => (props.primary ? "1rem" : "0.8rem 1.3rem")};
  border-radius: 0.1875rem;
  color: #fff;
  font-size: ${props => (props.primary ? "2rem" : "1rem")};
  text-align: center;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.45);
  transition: background 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background: #1089ff;
    color: white;
  }
`;
