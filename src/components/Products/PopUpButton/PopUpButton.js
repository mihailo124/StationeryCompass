import React from "react";
import classes from "./PopUpButton.module.css";
import { NavLink } from "react-router-dom";

const PopUpButton = () => {
  return (
    <div className={classes.PopUpButton}>
      <NavLink to="/checkout">
        <span role="img" aria-label="cart">
          🛒
        </span>
      </NavLink>
    </div>
  );
};

export default PopUpButton;
