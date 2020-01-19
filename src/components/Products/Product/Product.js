import React, { Component } from "react";
import classes from "./Product.module.css";
import Image from "./Image/Image";
import QuantityCounter from "./QuantityCounter/QuantityCounter";
import CartAddingButton from "./CartAddingButton/CartAddingButton";

class Product extends Component {
  state = {
    colorOptions: null,
    colorSelected: null,
    quantity: 1,
    price: this.props.data.price,
    hasMounted: false
  };

  colorSelectorHandler = event => {
    this.setState({ colorSelected: event.target.value });
  };

  quantityIncrementHandler = () => {
    const quantityUpdated = this.state.quantity + 1;
    const priceUpdated = quantityUpdated * this.props.data.price;
    if (this.state.quantity < 10)
      this.setState({
        quantity: quantityUpdated,
        price: priceUpdated
      });
  };

  quantityDecrementHandler = () => {
    const quantityUpdated = this.state.quantity - 1;
    const priceUpdated = quantityUpdated * this.props.data.price;
    if (this.state.quantity > 1)
      this.setState({
        quantity: quantityUpdated,
        price: priceUpdated
      });
  };

  cartAddingHandler = () => {
    const cart = JSON.parse(window.sessionStorage.getItem("data"));
    this.props.popUp();

    if (cart.price === 0) {
      console.log("Cart has been initialised!");
      cart[`${this.props.data.name} ${this.state.colorSelected}`] = {
        amount: this.state.quantity,
        price: this.state.price,
        color: this.state.colorSelected,
        name: `${this.props.data.name} ${this.state.colorSelected}`,
        colors: this.props.data.colors
      };
    } else {
      console.log("Cart has been updated!");
      if (
        cart.hasOwnProperty(
          `${this.props.data.name} ${this.state.colorSelected}`
        ) &&
        cart[`${this.props.data.name} ${this.state.colorSelected}`].color ===
          this.state.colorSelected
      ) {
        console.log("CASE 1");
        cart[`${this.props.data.name} ${this.state.colorSelected}`] = {
          amount:
            cart[`${this.props.data.name} ${this.state.colorSelected}`].amount +
            this.state.quantity,
          price:
            cart[`${this.props.data.name} ${this.state.colorSelected}`].price +
            this.state.price,
          color: this.state.colorSelected,
          name: `${this.props.data.name} ${this.state.colorSelected}`,
          colors: this.props.data.colors
        };
      } else {
        console.log("CASE 2");
        cart[`${this.props.data.name} ${this.state.colorSelected}`] = {
          amount: this.state.quantity,
          price: this.state.price,
          color: this.state.colorSelected,
          name: `${this.props.data.name} ${this.state.colorSelected}`,
          colors: this.props.data.colors
        };
      }
    }

    // console.log(`
    // this.state.price = ${this.state.price}
    // this.state.quantity = ${this.state.quantity}
    // `)

    cart.price += this.state.price;
    window.sessionStorage.setItem("data", JSON.stringify(cart));
    console.log(JSON.parse(window.sessionStorage.getItem("data")));
  };

  componentDidMount() {
    if (this.props.data.colors) {
      let clrOptions = this.props.data.colors.map(clr => (
        <option key={Math.random()}>{clr}</option>
      ));
      clrOptions = (
        <select onChange={this.colorSelectorHandler}>{clrOptions}</select>
      );

      this.setState({
        colorOptions: clrOptions,
        colorSelected: this.props.data.colors[0]
      });
    }
  }

  render() {
    const delay = this.props.timing + "ms";

    return (
      <div className={classes.Product} style={{ animationDelay: delay }}>
        <div className={classes.UpperWrapper}>
          <div>
            <h4>{this.props.data.name}</h4>
            <p>
              Price{":"}
              <strong style={{ display: "block" }}>$ {this.state.price}</strong>
            </p>
          </div>
          <Image
            data={this.props.data}
            colorSelected={this.state.colorSelected}
            zoom
          />
        </div>
        <div className={classes.LowerWrapper}>
          <CartAddingButton handler={this.cartAddingHandler} />
          <QuantityCounter
            val={this.state.quantity}
            inc={this.quantityIncrementHandler}
            dec={this.quantityDecrementHandler}
          />
          {this.state.colorOptions}
        </div>
      </div>
    );
  }
}

export default Product;
