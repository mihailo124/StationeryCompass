import React from 'react'
import classes from "./CheckoutButton.module.css";

const CheckoutButton = (props) => {
    return (
      <div>
        <button onClick={props.clicked} className={classes.Button}>
          Checkout
        </button>
      </div>
    );
}

export default CheckoutButton
