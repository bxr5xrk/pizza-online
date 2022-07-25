import React, { useState } from "react";

const PizzaSizeAndType = ({ sizes, edges }) => {
    const edgePrice = 20;
    const [sizeActive, setSizeActive] = useState(0);
    const [edgeActive, setEdgeActive] = useState(0);

    const pizzaPrice =
        edgeActive === 1
            ? sizes[sizeActive].price + edgePrice
            : sizes[sizeActive].price;

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

            <h4>{pizzaPrice}</h4>
        </div>
    );
};

export default PizzaSizeAndType;
