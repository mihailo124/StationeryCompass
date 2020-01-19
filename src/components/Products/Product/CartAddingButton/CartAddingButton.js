import React from "react";
import classes from "./CartAddingButton.module.css";

const checkoutButton = props => {
  return (
    <button className={classes.Btn} onClick={props.handler}>
      <span role="img" aria-label="cart">
        🛒
      </span>{" "}
      Add to cart
    </button>
  );
};

export default checkoutButton;
