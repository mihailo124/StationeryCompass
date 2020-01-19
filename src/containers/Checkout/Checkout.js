import React, { Component } from "react";
import Header from "../../components/Checkout/Header/Header";
import CartItems from "../../components/Checkout/CartItems/CartItems";
import TotalPrice from "../../components/Checkout/TotalPrice/TotalPrice";
import CheckoutButton from "../../components/Checkout/CheckoutButton/CheckoutButton";
import Modal from "../../components/Checkout/Modal/Modal";
import classes from "./Checkout.module.css";

class Checkout extends Component {
  state = {
    totalPrice: 0,
    modal: false
  };

  totalPriceHandler = price => {
    this.setState({ totalPrice: price, modal: false });
  };

  total = () => {
    if (this.state.totalPrice === 0) return null;
    return <h4>Total Price: {this.state.totalPrice} $</h4>;
  };

  checkoutHandler = () => {
    this.setState({ modal: true });
  };

  modalClosedHandler = () => {
    this.setState({ modal: false });
  }

  render() {
    const button = this.state.totalPrice ? (
      <CheckoutButton clicked={this.checkoutHandler} />
    ) : null;
    return (
      <div className={classes.Checkout}>
        <Header show={this.state.totalPrice} />
        <TotalPrice totalPrice={this.total()} />
        <CartItems totalPriceHandler={this.totalPriceHandler} />
        {button}
        <Modal modalClosed={this.modalClosedHandler} show={this.state.modal} />
      </div>
    );
  }
}

export default Checkout;
