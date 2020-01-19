import React from "react";
import classes from "./SortingPanel.module.css";

const sortingPanel = props => {
  const sort = event => {
    props.sorting(event.target.value);
  };
  return (
    <div className={classes.Sort}>
      <select onChange={sort}>
        <option defaultValue hidden>
          Sort By
        </option>
        <option value="1">Name</option>
        <option value="2">Name Reversed</option>
        <option value="3">Price</option>
        <option value="4">Price Reversed</option>
      </select>
    </div>
  );
};

export default sortingPanel;
