import React, { Fragment } from "react";
import Backdrop from "../../UI/Backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = props => {
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0"
        }}
      >
        <h3>Your order has been received!</h3>
      </div>
    </Fragment>
  );
};

export default Modal;
