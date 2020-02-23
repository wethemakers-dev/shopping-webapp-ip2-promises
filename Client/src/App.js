import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Marketlocater from "../src/Container/Marketlocater/Marketlocater";
import Wishlist from "../src/Container/Wishlist/Wishlist";
import Shoppinglist from "../src/Container/Shoppinglist/Shoppinglist";
import Familyshare from "../src/Container/Familyshare/Familyshare";
import { Layout } from "../src/Component/Layout/Layout";
import { Container } from "rsuite";
import Landingpage from "./Container/Landingpage/Landingpage";
import "./App.css";
import LoginRegister from "./Container/LoginRegister/LoginRegister";

class App extends Component {
  state = {};
  render() {
    return (
      <Container>
        <Router>
          <Switch>
            <Route exact path="/" component={Landingpage} /> />
          </Switch>

          <Container>
            <Layout>
              <Switch>
                <Route path="/LoginRegister" component={LoginRegister} />
                <Route path="/Wishlist" component={Wishlist} />
                <Route path="/marketlocater" component={Marketlocater} />
                <Route path="/Shoppinglist" component={Shoppinglist} />
                <Route path="/Share" component={Familyshare} />
              </Switch>
            </Layout>
          </Container>
        </Router>
      </Container>
    );
  }
}

export default App;
