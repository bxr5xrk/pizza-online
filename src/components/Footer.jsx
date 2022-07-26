import { format } from "date-fns";
import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                ONLINE PIZZA © 2021 - {format(new Date(), "yyyy")} Усі права
                захищено
            </p>
            <div>
                <a href="/">Умови користування</a>
                <a href="/">Політика Конфіденційності</a>
            </div>
        </footer>
    );
};

export default Footer;
