import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Checkout from "./containers/Checkout/Checkout";
import Products from "./containers/Products/Products";
import HomePage from "./containers/HomePage/HomePage";
import { Route, Switch } from "react-router-dom";

class App extends Component {

  componentDidMount() {
    window.sessionStorage.setItem('data', JSON.stringify({ price: 0 }));
  }

  render() {

    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/products" component={Products} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
