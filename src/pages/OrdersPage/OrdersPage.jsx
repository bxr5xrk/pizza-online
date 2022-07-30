import React, { useEffect, useState } from "react";
import { getCartitems } from "../../api/PizzaService";
import OrderItem from "../../components/OrderItem";
import st from "./OrdersPage.module.scss";

const OrdersPage = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        getCartitems(setOrders);
    }, []);

    return (
        <div className="main">
            <div className={st.orders}>
                <h1>Замовлення: </h1>

                <section className={st.orders__list}>
                    {orders.length > 0 &&
                        orders.map((order, count) => (
                            <OrderItem
                                key={order.id}
                                count={count + 1}
                                price={order.totalPrice}
                                name={order.firstName}
                                phone={order.phone}
                                orderItems={order.items}
                            />
                        ))}
                </section>

                <h2>Кількість замовлень: {orders.length}</h2>
            </div>
        </div>
    );
};

export default OrdersPage;
