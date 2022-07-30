import React, { useEffect, useState } from "react";
import { getCartitems } from "../../api/PizzaService";

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getCartitems(setOrders);
    }, []);

    return (
        <div>
            <h1>замовлення: </h1>
            {orders.length > 0 &&
                orders.map((order, count) => (
                    <>
                        <h2 key={order.id}>
                            {count + 1}. total price: {order.totalPrice}
                        </h2>
                        <h2 key={order.id}>
                            Iм'я: {order.firstName}, {order.phone}
                        </h2>

                        {order.items.map((item) => (
                            <h3 key={item.id}>
                                {item.title}, count: {item.count}, size:{" "}
                                {item.size}, edge: {item.edge}{" "}
                            </h3>
                        ))}
                    </>
                ))}
        </div>
    );
};

export default OrdersPage;
