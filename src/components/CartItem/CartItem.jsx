import React from "react";
import { useDispatch } from "react-redux";
import {
    addPizzaToCart,
    cartItemDecrement,
    removePizzaFromCart,
} from "../../store/slices/cartSlice";

const CartItem = ({ id, title, count, image, size, edge, price }) => {
    const dispatch = useDispatch();

    return (
        <div>
            <img src={image} alt={title} width={50} height={50} />
            <h3>{title}</h3>
            <h4>{size}</h4>
            <h4>{edge}</h4>
            <h4>{price * count}</h4>

            <p onClick={() => dispatch(cartItemDecrement({ id, size, edge }))}>
                -
            </p>
            <p>{count}</p>
            <p onClick={() => dispatch(addPizzaToCart({ id, size, edge }))}>
                +
            </p>
            <p
                onClick={() =>
                    dispatch(removePizzaFromCart({ id, size, edge }))
                }
            >
                remove all
            </p>
        </div>
    );
};

export default CartItem;
