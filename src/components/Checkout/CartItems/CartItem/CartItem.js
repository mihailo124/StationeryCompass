import React from "react";
import classes from "./CartItem.module.css";
import Image from "../../../Products/Product/Image/Image";
import QuantityCounter from "../../../Products/Product/QuantityCounter/QuantityCounter";

const cartItem = props => {
  let name;
  console.log(props.data)
  if (props.data.color) {
    name = props.data.name
      .split("")
      .splice(0, props.data.name.length - (props.data.color.length + 1))
      .join("");
  } else {
    name = props.data.name
      .split("")
      .splice(0, props.data.name.length - 5)
      .join("");
  }

  const imgData = { name: name, color: props.data.color };

  let fullName = props.data.name;

  let colorOptions = null;
  if (props.data.colors) {
    let clrOptions = props.data.colors.filter(clr => clr !== props.data.color);
    clrOptions = clrOptions.map(clr => (
      <option key={Math.random()}>{clr}</option>
    ));
    clrOptions = (
      <select onChange={props.colorSelectorHandler} id={props.data.name}>
        <option key={Math.random()}>{props.data.color}</option>
        {clrOptions}
      </select>
    );
    colorOptions = clrOptions;
  }

  return (
    <div className={classes.Item} id={props.data.name}>
      <div className={classes.InfoWrapper}>
        <h4>{name}</h4>
        <p>
          Price: <strong>{props.data.price}</strong> $
        </p>
        {colorOptions}
        <QuantityCounter
          fullName={fullName}
          val={props.data.amount}
          inc={props.incrementHandler}
          dec={props.decrementHandler}
        />
      </div>
      <Image data={imgData} zoom={false} colorSelected={props.data.color} />
      <button
        id={props.data.name}
        className={classes.Btn}
        onClick={props.deleteHandler}
      >
        x
      </button>
    </div>
  );
};

export default cartItem;
