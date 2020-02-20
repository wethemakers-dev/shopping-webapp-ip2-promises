import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Marketlocater from "../src/Container/Marketlocater/Marketlocater";
import Wishlist from "../src/Container/Wishlist/Wishlist";
import Shoppinglist from "../src/Container/Shoppinglist/Shoppinglist";
import Familyshare from "../src/Container/Familyshare/Familyshare";
import { Layout } from "../src/Component/Layout/Layout";
import { NavigationBar } from "../src/Component/NavigationBar/NavigationBar";
import { SideNav } from "../src/Component/SideNav/SideNav";
import { Container } from "rsuite";

class App extends Component {
  render() {
    return (
      <Container>
        <Router>
          <NavigationBar />
          <Container>
            <SideNav />
            <Layout>
              <Switch>
                <Route exact path="/" component={Shoppinglist} />
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
