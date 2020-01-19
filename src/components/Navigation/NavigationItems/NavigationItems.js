import React from 'react';
import classes from "./NavigationItems.module.css";
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem closed={props.closed} link='/'>Home Page</NavigationItem>
            <NavigationItem closed={props.closed} link='/products'>Products</NavigationItem>
            <NavigationItem closed={props.closed} link='/checkout'>Checkout</NavigationItem>
        </ul>
    )
};

export default navigationItems;
