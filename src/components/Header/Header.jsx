import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectCart } from "../../store/slices/cartSlice";

const Header = () => {
    const { totalPrice, cartItems } = useSelector(selectCart);
    const itemsCount = cartItems.reduce((total, i) => total + i.count, 0);

    return (
        <header>
            <Link to="/">
                <span>logo</span>
                pizza-online
            </Link>

            <Link to="/pizzas/p=1">pizza</Link>
            <Link to="/cart">
                cart {totalPrice} грн {itemsCount}
            </Link>
        </header>
    );
};

export default Header;
