import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getOrderItems } from "../../api/PizzaService";
import OrderItem from "../../components/OrderItem";
import { setAuth } from "../../store/slices/authSlice";
import st from "./OrdersPage.module.scss";

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);
    const updateTime = 10_000;
    const [time, setTime] = useState(Date.now());
    const dispatch = useDispatch();

    useEffect(() => {
        getOrderItems(setOrders);

        const interval = setInterval(() => setTime(Date.now()), updateTime);
        return () => {
            clearInterval(interval);
        };
    }, [time]);

    orders.sort((a, b) => b.time.localeCompare(a.time));

    return (
        <div className="main">
            <div className={st.orders}>
                <div className={st.orders__title}>
                    <h1>Замовлення: </h1>
                    <button onClick={() => dispatch(setAuth(false))}>
                        Вийти
                    </button>
                </div>

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
                    <h1>Замовлень немає :(</h1>
                )}
            </div>
        </div>
    );
};

export default OrdersPage;
