import React, { useState, Fragment } from "react";
import classes from "./Image.module.css";
import bluePencil from "../../../../assets/images/products/bluePencil.png";
import redPencil from "../../../../assets/images/products/redPencil.png";
import greenPencil from "../../../../assets/images/products/greenPencil.png";
import yellowPencil from "../../../../assets/images/products/yellowPencil.png";
import BlackPen from "../../../../assets/images/products/Pen1.png";
import silverBallPen from "../../../../assets/images/products/silverBallPen.png";
import redBallPen from "../../../../assets/images/products/redBallPen.png";
import blueBallPen from "../../../../assets/images/products/blueBallPen.png";
import orangeNotepad from "../../../../assets/images/products/orangeNotepad.png";
import mintNotepad from "../../../../assets/images/products/mintNotepad.png";
import violetNotepad from "../../../../assets/images/products/violetNotepad.png";
import Scissors from "../../../../assets/images/products/Scissors.png";
import Stapler from "../../../../assets/images/products/Stapler.png";
import Ruler from "../../../../assets/images/products/Ruler.png";
import Eraser from "../../../../assets/images/products/Eraser.png";
import Glue from "../../../../assets/images/products/Glue.png";
import NotFound from "../../../../assets/images/products/notFound.png";

const Image = props => {
  let item;

  switch (props.data.name) {
    case "Pencil":
      switch (props.colorSelected) {
        case "green":
          item = greenPencil;
          break;
        case "yellow":
          item = yellowPencil;
          break;
        case "red":
          item = redPencil;
          break;

        default:
          item = bluePencil;
          break;
      }
      break;
    case "Ball Pen":
      switch (props.colorSelected) {
        case "blue":
          item = blueBallPen;
          break;
        case "silver":
          item = silverBallPen;
          break;
        default:
          item = redBallPen;
          break;
      }
      break;
    case "Black Pen":
      item = BlackPen;
      break;
    case "Notepad":
      switch (props.colorSelected) {
        case "mint":
          item = mintNotepad;
          break;
        case "violet":
          item = violetNotepad;
          break;
        default:
          item = orangeNotepad;
          break;
      }
      break;
    case "Scissors":
      item = Scissors;
      break;
    case "Stapler":
      item = Stapler;
      break;
    case "Ruler":
      item = Ruler;
      break;
    case "Eraser":
      item = Eraser;
      break;
    case "Glue":
      item = Glue;
      break;

    default:
      item = NotFound;
      break;
  }
  const [imgStyling, setImgStyling] = useState(classes.Image);
  const [backdrop, setBackdrop] = useState(null);

  const imgClickHandler = event => {
    setImgStyling(
      imgStyling === classes.ImageClicked ? classes.Image : classes.ImageClicked
    );
    if (backdrop) {
      setBackdrop(null);
    } else {
      setBackdrop(
        <div className={classes.Backdrop} onClick={imgClickHandler}></div>
      );
    }
  };

  return (
    <Fragment>
      <img
        src={item}
        alt="a"
        className={imgStyling}
        onClick={props.zoom ? imgClickHandler : null}
      />
      {backdrop}
    </Fragment>
  );
};

export default Image;
