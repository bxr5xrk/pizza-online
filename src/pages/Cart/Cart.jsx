import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import { clearCart, selectCart } from "../../store/slices/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const { totalPrice, cartItems } = useSelector(selectCart);
    const itemsCount = cartItems.reduce((total, i) => total + i.count, 0);

    return (
        <div>
            {cartItems.length ? (
                <>
                    <h2 onClick={() => dispatch(clearCart())}>remove all</h2>
                    {cartItems.map((i) => (
                        <CartItem
                            key={i.id + i.price}
                            id={i.id}
                            title={i.title}
                            count={i.count}
                            image={i.image}
                            size={i.size}
                            edge={i.edge}
                            price={i.price}
                        />
                    ))}
                    <h2>кільксть: {itemsCount}</h2>
                    <h2>total price: {totalPrice} грн</h2>
                    <h2>на головну</h2>
                </>
            ) : (
                <h2>nothing</h2>
            )}
        </div>
    );
};

export default Cart;
