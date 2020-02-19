import React, { Component } from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Marketlocater from "../src/Container/Marketlocater/Marketlocater";
import Wishlist from "../src/Container/Wishlist/Wishlist";
import Shoppinglist from "../src/Container/Shoppinglist/Shoppinglist";
import Familyshare from "../src/Container/Familyshare/Familyshare";
import { Home } from "../src/Container/Home/Home";
import { Layout } from "../src/Component/Layout/Layout";
import { NavigationBar } from "../src/Component/NavigationBar/NavigationBar";
import { JumboTron } from "../src/Component/JumboTron/JumboTron";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <JumboTron />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/Wishlist" component={Wishlist} />
              <Route path="/marketlocater" component={Marketlocater} />
              <Route path="/Shoppinglist" component={Shoppinglist} />
              <Route path="/Share" component={Familyshare} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
