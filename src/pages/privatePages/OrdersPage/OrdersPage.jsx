import React, { useEffect, useState } from "react";
import { getOrderItems } from "../../../api/PizzaService";
import OrderItem from "../../../components/OrderItem";
import st from "./OrdersPage.module.scss";

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const updateTime = 10_000;
    const [time, setTime] = useState(Date.now());

    useEffect(() => {
        getOrderItems(setOrders);

        const interval = setInterval(() => setTime(Date.now()), updateTime);
        return () => {
            clearInterval(interval);
        };
    }, [time]);

    orders.sort((a, b) => b.time.localeCompare(a.time));

    return (
        <div className={st.orders}>
            <h1 className={st.orders__title}>Замовлення: </h1>

            {orders.length > 0 ? (
                <>
                    <section className={st.orders__list}>
                        {orders.map((order, count) => (
                            <OrderItem
                                id={order.id}
                                key={order.id}
                                count={count + 1}
                                time={order.time.slice(-5)}
                                price={order.totalPrice}
                                name={order.firstName}
                                phone={order.phone}
                                orderItems={order.items}
                            />
                        ))}
                    </section>

                    <h2>Кількість замовлень: {orders.length}</h2>
                </>
            ) : (
                <h3>Замовлень немає :(</h3>
            )}
        </div>
    );
};

export default OrdersPage;
