import React from "react";
import classes from "./GoShoppingButton.module.css";
import { NavLink } from "react-router-dom";

const goShoppingButton = () => (
  <div className={classes.Button}>
    <NavLink to="/products">
      <button className={classes.btn}>GO SHOPPING</button>
    </NavLink>
  </div>
);

export default goShoppingButton;
