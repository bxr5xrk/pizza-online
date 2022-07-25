import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
    const { cartItems, totalPrice } = useSelector((state) => state.cartSlice);

    return (
        <div>
            <h2>remove all</h2>
            {cartItems.length ? (
                cartItems.map((i) => <CartItem key={i.id} title={i.title} count={i.count} />)
            ) : (
                <h2>nothing</h2>
            )}
            <h2>кільксть</h2>
            <h2>total price: {totalPrice}</h2>
            <h2>на головну</h2>
        </div>
    );
};

export default Cart;
