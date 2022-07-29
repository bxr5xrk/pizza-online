import React, { useEffect, useState } from "react";
import { getCartitems } from "../../api/PizzaService";

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getCartitems(setOrders);
    }, []);

    // console.log(orders)
    const items = orders.map((i) => i.items);
    // console.log(items.map((i, j) =>i))
    // console.log(items.map((i, item) => i[item].title))
    // const a = orders.map((i, j) => i)

    // const b = a.map((i, j) => i )

    // console.log(items.map((i, j) => i[j].title));

    return (
        <div>
            <h1>замовлення</h1>
            {orders.length > 0 &&
                orders.map((i, j) => (
                    <>
                        <h1 key={i.id}>
                            {i.id}. {i.totalPrice}
                        </h1>
                        {/* {i[j].map((i) => (
                            <>{i.title}</>
                        ))} */}
                    </>
                ))}
        </div>
    );
};

export default OrdersPage;
