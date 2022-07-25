import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizzaToCart } from "../../store/slices/cartSlice";

const PizzaSizeAndType = ({ sizes, edges, id, title, image }) => {
    const edgePrice = 20;
    const [sizeActive, setSizeActive] = useState(0);
    const [edgeActive, setEdgeActive] = useState(0);
    const dispatch = useDispatch();
    // const { cartItems } = useSelector((state) => state.cartSlice);

    const pizzaPrice =
        edgeActive === 1
            ? sizes[sizeActive].price + edgePrice
            : sizes[sizeActive].price;

    const selectPizza = () => {
        console.log({
            title,
            id,
            image,
            edge: edges[edgeActive],
            size: sizes[sizeActive].size,
            price: pizzaPrice,
            count: 1,
        });
        dispatch(
            addPizzaToCart({
                title,
                id,
                image,
                edges: edges[edgeActive],
                size: sizes[sizeActive].size,
                price: pizzaPrice,
                count: 1,
            })
        );
    };

    const cartItem = useSelector((state) =>
        state.cartSlice.cartItems.find(
            (obj) =>
                id === obj.id &&
                sizes[sizeActive].size === obj.size &&
                edges[edgeActive] === obj.edges
        )
    );

    return (
        <div>
            <ul>
                {sizes.map((size, i) => (
                    <li
                        onClick={() => setSizeActive(i)}
                        className={sizeActive === i ? "active" : ""}
                        key={i}
                    >
                        {size.size} см.
                    </li>
                ))}
            </ul>
            <p className="edges">Бортик</p>
            <ul>
                {edges.map((edge, i) => (
                    <li
                        onClick={() => setEdgeActive(i)}
                        className={edgeActive === i ? "active" : ""}
                        key={i}
                    >
                        {edge}
                    </li>
                ))}
            </ul>
            <button onClick={selectPizza}>
                додати {cartItem && cartItem.count > 0 ? cartItem.count : 0}
            </button>
            <h4>{pizzaPrice}</h4>
        </div>
    );
};

export default PizzaSizeAndType;
