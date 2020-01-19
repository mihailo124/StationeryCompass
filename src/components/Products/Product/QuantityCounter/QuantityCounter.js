import React from "react";
import classes from "./QuantityCounter.module.css";

const QuantityCounter = props => {
  return (
    <div className={classes.Quantity} id={props.fullName}>
      <button
        onClick={props.dec}
        style={{
          borderTopLeftRadius: "5px",
          borderBottomLeftRadius: "5px"
        }}
      >
        -
      </button>
      <input min="1" max="10" value={props.val} readOnly type="number" />
      <button
        onClick={props.inc}
        style={{
          borderTopRightRadius: "5px",
          borderBottomRightRadius: "5px"
        }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityCounter;
