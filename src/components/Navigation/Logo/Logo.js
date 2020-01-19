import React, { useState } from "react";
import classes from "./Logo.module.css";
import { NavLink } from "react-router-dom";

const Logo = props => {

  const [click, setClicked] = useState(false)
  const hasClicked = () => {
    setClicked(!click);
  };

  const styling = click
    ? [classes.Logo, classes.Click].join(" ")
    : classes.Logo;

  return (
    <div
      className={styling}
      style={{
        height: props.height,
        color: props.color,
        marginBottom: props.mb
      }}
      onClick={hasClicked}
    >
      <NavLink to="/" style={{ color: props.color }}>
        Sc
      </NavLink>
    </div>
  );
};

export default Logo;
