import React, { Component } from "react";
import nextId from "react-id-generator";
import CartItem from "./CartItem/CartItem";
import classes from "./CartItems.module.css";

export class CartItems extends Component {
  state = {
    products: null,
    total: null
  };

  componentDidMount() {
    const cart = JSON.parse(window.sessionStorage.getItem("data"));
    if (cart.price !== 0) this.productsUpdateHandler(cart);
    this.setState({ total: cart.price });
  }

  productsUpdateHandler = cart => {
    const updatedCart = this.totalPriceUpdateHandler(cart);
    window.sessionStorage.setItem("data", JSON.stringify(updatedCart));
    const products = [];
    for (let product in updatedCart) {
      if (typeof updatedCart[product] !== "number")
        products.push(updatedCart[product]);
    }
    this.setState({ products: products });
  };

  totalPriceUpdateHandler = cart => {
    const updatedCart = { ...cart };
    let totalPrice = 0;
    for (let product in updatedCart) {
      totalPrice +=
        typeof updatedCart[product] === "number"
          ? 0
          : updatedCart[product].price;
    }
    this.props.totalPriceHandler(totalPrice);
    updatedCart.price = totalPrice;
    return updatedCart;
  };

  incrementHandler = event => {
    const name = event.target.parentNode.id;
    const cart = JSON.parse(window.sessionStorage.getItem("data"));
    if (cart[name]) {
      console.log("inc");
      console.log(cart[name]);
      
      const pricing = cart[name].price / cart[name].amount;
      ++cart[name].amount;
      cart[name].price = pricing * cart[name].amount;

      console.log(cart[name]);
      this.productsUpdateHandler(cart);
    } else window.location.reload();
  };

  decrementHandler = event => {
    const name = event.target.parentNode.id;
    const cart = JSON.parse(window.sessionStorage.getItem("data"));
    if (cart[name] && cart[name].amount > 1) {
      console.log("dec");
      const pricing = cart[name].price / cart[name].amount;
      --cart[name].amount;
      cart[name].price = pricing * cart[name].amount;
      this.productsUpdateHandler(cart);
    } else {
      if (cart[name] === undefined) window.location.reload();
    };
  };

  deletePropertyHandler = event => {
    const name = event.target.id;
    const cart = JSON.parse(window.sessionStorage.getItem("data"));
    delete cart[name];
    this.productsUpdateHandler(cart);
  };

  colorSelectorHandler = event => {
    const name = event.target.id;
    const cart = JSON.parse(window.sessionStorage.getItem("data"));
    if (cart[name]) {
      const newColor = event.target.value;
      let newName = name.split(" ");
      newName.splice(-1, 1, newColor);
      newName = newName.join(" ");
      if (cart[newName] === undefined) {
        console.log("CASE #1");
        const updatedCartItem = JSON.parse(JSON.stringify(cart[name]));
        delete cart[name];
        updatedCartItem.name = newName;
        updatedCartItem.color = newColor;
        cart[updatedCartItem.name] = updatedCartItem;
      } else {
        console.log("CASE #2");
        cart[newName].amount += cart[name].amount;
        cart[newName].price = cart[newName].price + cart[name].price;
        delete cart[name];
      }
      this.productsUpdateHandler(cart);
    } else window.location.reload();
  };

  render() {
    return (
      <div className={classes.CartItems}>
        {this.state.products
          ? this.state.products.map(el => (
              <CartItem
                colorSelectorHandler={this.colorSelectorHandler}
                incrementHandler={this.incrementHandler}
                decrementHandler={this.decrementHandler}
                deleteHandler={this.deletePropertyHandler}
                key={nextId()}
                data={el}
              />
            ))
          : null}
      </div>
    );
  }
}

export default CartItems;
