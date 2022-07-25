import React from "react";

const CartItem = ({ title, count }) => {
    return (
        <div>
            {title}
            <h3>{count}</h3>
        </div>
    );
};

export default CartItem;
