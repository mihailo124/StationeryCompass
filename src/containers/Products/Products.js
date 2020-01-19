import React, { Component, Fragment } from "react";
import Product from "../../components/Products/Product/Product";
import PopUpButton from "../../components/Products/PopUpButton/PopUpButton";
import SortingPanel from "../../components/Products/SortingPanel/SortingPanel";
import classes from "./Products.module.css";

export class Products extends Component {
  state = {
    products: [
      { name: "Ball Pen", price: 3, colors: ["red", "blue", "silver"] },
      { name: "Black Pen", price: 5 },
      { name: "Pencil", price: 2, colors: ["blue", "green", "yellow", "red"] },
      { name: "Notepad", price: 7, colors: ["orange", "mint", "violet"] },
      { name: "Scissors", price: 6 },
      { name: "Stapler", price: 12 },
      { name: "Ruler", price: 8 },
      { name: "Eraser", price: 2 },
      { name: "Glue", price: 9 }
    ],
    popUp: false
  };

  componentDidMount() {
    const cart = JSON.parse(window.sessionStorage.getItem("data"));
    if (cart.price === 0) this.setState({ popUp: false });
  }

  sortingProducts = type => {
    this.setState({ type: type });
  };

  popUpHandler = () => {
    if (!this.state.popUp) this.setState({ popUp: true });
  };

  render() {
    let productsRender = this.state.products;

    const compare = (a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    };

    switch (this.state.type) {
      case "1":
        productsRender.sort(compare);
        break;
      case "2":
        productsRender.sort(compare).reverse();
        break;
      case "3":
        productsRender.sort((a, b) => a.price - b.price);
        break;
      case "4":
        productsRender.sort((a, b) => b.price - a.price);
        break;

      default:
        break;
    }

    productsRender = this.state.products.map((el, i) => (
      <Product
        key={Math.random()}
        timing={i * 50}
        data={el}
        popUp={this.popUpHandler}
      />
    ));

    return (
      <Fragment>
        <SortingPanel sorting={this.sortingProducts} />
        <div
          className={this.state.popUp ? classes.ProductsA : classes.Products}
        >
          {this.state.popUp ? <PopUpButton /> : null}
          {productsRender}
        </div>
      </Fragment>
    );
  }
}

export default Products;
