import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <span>logo</span>
            <Link to="/">pizza-online</Link>
            <Link to="/pizzas/p=1">pizza</Link>
        </header>
    );
};

export default Header;
