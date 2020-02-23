import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

class Footer extends Component {
  render() {
    return (
      <FooterContainer>
        <span style={{ marginLeft: "15%", fontSize: "1.125rem" }}>
          Questions? <Link to="/">Call XX-XXX-XX-XXXXX</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link to="/">FAQ</Link>
            </li>
            <li>
              <Link to="/">Investor Relations</Link>
            </li>
            <li>
              <Link to="/">XXXXXXXXXXXX</Link>
            </li>
            <li>
              <Link to="/">Corporate Information</Link>
            </li>
            <li>
              <Link to="/">XXXXXXXXXXXX</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Help Center</Link>
            </li>
            <li>
              <Link to="/">XXXXXXXXXXXX</Link>
            </li>
            <li>
              <Link to="/">Terms of Use</Link>
            </li>
            <li>
              <Link to="/">Contact Us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Account</Link>
            </li>
            <li>
              <Link to="/">XXXXXXXXXXXX</Link>
            </li>
            <li>
              <Link to="/">Privacy</Link>
            </li>
            <li>
              <Link to="/">XXXXXXXXXXXX</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">Media Center</Link>
            </li>
            <li>
              <Link to="/">XXXXXXXXXXXX</Link>
            </li>
            <li>
              <Link to="/">Cookie Preferences</Link>
            </li>
            <li>
              <Link to="/">Legal Notices</Link>
            </li>
          </ul>
        </div>
      </FooterContainer>
    );
  }
}
export default Footer;

// Main Footer Container
const FooterContainer = styled.footer`
  background: white;
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: black;
  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 2rem;
  }
  ul li {
    list-style: none;
    line-height: 2.5;
  }
  a {
    color: black;
  }
  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }
  // Language Button
  .lang-btn {
    background: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    cursor: pointer;
  }
  // Toggle Language Content
  .lang-toggle {
    margin-left: 15%;
    position: absolute;
  }
  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    text-align: center;
    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;
