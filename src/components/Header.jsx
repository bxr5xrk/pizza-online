import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCart } from "../store/slices/cartSlice";

const Header = () => {
    const { totalPrice, cartItems } = useSelector(selectCart);
    const itemsCount = cartItems.reduce((total, i) => total + i.count, 0);

    return (
        <header className="header">
            <div className="icon">
                <img
                    width="38"
                    height="38"
                    src="../img/pizza-logo.svg"
                    alt="Pizza logo"
                />
                <Link to="/">
                    <h3>pizza-online</h3>
                    <p>Найсмачніша піца</p>
                </Link>
            </div>
            <div className="nav">
                <Link to="/pizzas/p=1">Піца</Link>
                <Link to="/pizzas/p=1">Суші</Link>
            </div>

            <Link to="/cart" className="cart">
                {totalPrice} грн {itemsCount}
            </Link>
        </header>
    );
};

export default Header;
