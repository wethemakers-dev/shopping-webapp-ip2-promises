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

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <Layout>
            <Switch>
              <Router>
                <Route exact path="/LoginRegister" component={LoginRegister} />
                <Route path="/Wishlist" component={Wishlist} />
                <Route path="/marketlocater" component={Marketlocater} />
                <Route path="/Shoppinglist" component={Shoppinglist} />
                <Route exact path="/" component={Landingpage} />
              </Router>
            </Switch>
          </Layout>
        </Router>
      </Container>
    );
  }
}

export default App;
