import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizzaToCart } from "../../store/slices/cartSlice";

const PizzaSizeAndType = ({ sizes, edges, id, title, image }) => {
    const edgePrice = 20;
    const [sizeActive, setSizeActive] = useState(0);
    const [edgeActive, setEdgeActive] = useState(0);
    const dispatch = useDispatch();

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
            <button onClick={selectPizza}>додати {1}</button>
            <h4>{pizzaPrice}</h4>
        </div>
    );
};

export default PizzaSizeAndType;
