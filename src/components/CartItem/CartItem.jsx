import React from "react";

const CartItem = ({ title, count, image, size, edge, price }) => {
    return (
        <div>
            <img src={image} alt={title} width={50} height={50} />
            <h2>{title}</h2>
            <h3>{count}</h3>
            <h3>{size}</h3>
            <h3>{edge}</h3>
            <h3>{price * count}</h3>
        </div>
    );
};

export default CartItem;
