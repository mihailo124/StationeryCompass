import React from "react";
import classes from "./Header.module.css";

const checkoutHeader = props => (
  <h1 className={classes.Header}>
    {props.show ? "Your Shopping Cart:" : "Shopping Cart Is empty"}
  </h1>
);

export default checkoutHeader;
