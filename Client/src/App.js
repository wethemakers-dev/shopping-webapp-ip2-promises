import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Marketlocater from "../src/Container/Marketlocater/Marketlocater";
import Wishlist from "../src/Container/Wishlist/Wishlist";
import Shoppinglist from "../src/Container/Shoppinglist/Shoppinglist";
import { Layout } from "../src/Component/Layout/Layout";
import { Container } from "rsuite";
import Landingpage from "./Container/Landingpage/Landingpage";
import "./App.css";
import LoginRegister from "./Container/LoginRegister/LoginRegister";
import { NavigationBar } from "./Component/NavigationBar/NavigationBar";
import NavBar from "./Component/Nav/NavBar";

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Landingpage} /> />
          </Switch>
          <Switch>
            <Route exact path="/LoginRegister" component={LoginRegister} />
          </Switch>

          <Container>
            <NavigationBar />
            <NavBar />
            <Layout>
              <Switch>
                <Route path="/Wishlist" component={Wishlist} />
                <Route path="/marketlocater" component={Marketlocater} />
                <Route path="/Shoppinglist" component={Shoppinglist} />
              </Switch>
            </Layout>
          </Container>
        </Router>
      </Container>
    );
  }
}

export default App;
