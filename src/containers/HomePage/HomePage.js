import React, { Component } from "react";
import classes from "./HomePage.module.css";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import GoShoppingButton from "../../components/HomePage/GoShoppingButton/GoShoppingButton"

export class HomePage extends Component {
  render() {
    return (
      <div className={classes.HomePage}>
        <div className={classes.Images}>
          <img
            className={classes.Image1}
            src={img1}
            alt="imagine that here are some icons flowing"
          />
          <img className={classes.Image2} src={img2} alt="" />
          <img className={classes.Image3} src={img3} alt="" />
        </div>
        <h1>StationeryCompass</h1>
        <div className={classes.HomePageText}>
          <p>Find all the office goods you'll ever need!</p>
        </div>
        <GoShoppingButton />
      </div>
    );
  }
}

export default HomePage;
