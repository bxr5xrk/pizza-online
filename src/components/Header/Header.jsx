import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <span>logo</span>
            <Link to="/">pizza-online</Link>
            <Link to="/pizza">pizza</Link>
        </header>
    );
};

export default Header;
