import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizzaToCart } from "../../store/slices/cartSlice";
import st from "./PizzaParams.module.scss";

const PizzaParams = ({ sizes, edges, id, title, image }) => {
    const edgePrice = 20;
    const [sizeActive, setSizeActive] = useState(0);
    const [edgeActive, setEdgeActive] = useState(0);
    const dispatch = useDispatch();

    const pizzaPrice =
        edgeActive === 1
            ? sizes[sizeActive].price + edgePrice
            : sizes[sizeActive].price;

    const selectPizza = () =>
        dispatch(
            addPizzaToCart({
                title,
                id,
                image,
                edge: edges[edgeActive],
                size: sizes[sizeActive].size,
                price: pizzaPrice,
            })
        );

    const cartItem = useSelector((state) =>
        state.cartSlice.cartItems.find(
            (obj) =>
                id === obj.id &&
                sizes[sizeActive].size === obj.size &&
                edges[edgeActive] === obj.edge
        )
    );

    return (
        <>
            <div className={st.top}>
                <ul className={st.params}>
                    {sizes.map((size, i) => (
                        <li
                            onClick={() => setSizeActive(i)}
                            className={sizeActive === i ? `${st.active}` : ""}
                            key={i}
                        >
                            {size.size} см.
                        </li>
                    ))}
                </ul>
                <p className={st.edges}>Бортик</p>
                <ul className={st.params}>
                    {edges.map((edge, i) => (
                        <li
                            onClick={() => setEdgeActive(i)}
                            className={edgeActive === i ? `${st.active}` : ""}
                            key={i}
                        >
                            {edge}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={st.bottom}>
                <h4>{pizzaPrice} грн</h4>
                <button onClick={selectPizza} className={st.button}>
                    + Добавити
                    <span>{cartItem && cartItem ? cartItem.count : 0}</span>
                </button>
            </div>
        </>
    );
};

export default PizzaParams;
