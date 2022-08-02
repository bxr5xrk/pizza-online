import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOrderHistory } from "../../../api/PizzaService";
import { calculateCountItems } from "../../../utils/workingWithArrays";

const StatisticsPage = () => {
    const [data, setData] = useState([]);
    const [screens, setScreens] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [pizzas, setPizzas] = useState([]);
    const [prices, setPrices] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getOrderHistory(setData);
    }, []);

    useEffect(() => {
        setPrices(data.map((i) => i.totalPrice));
        setScreens(data.map((i) => i.screen));
        setLanguages(data.map((i) => i.language));
        setPizzas(data.map((i) => i.items.map((j) => j.title)));
    }, [data]);

    return (
        <div>
            {screens.length > 0 && pizzas.length > 0 && languages.length > 0 ? (
                <>
                    <h2>
                        totalPrice:{" "}
                        {prices.length > 1 &&
                            prices.reduce((total, i) => total + i)}{" "}
                        грн.
                    </h2>

                    <h3>pizzas</h3>
                    {calculateCountItems([].concat.apply([], pizzas)).map(
                        (i, count) => (
                            <p key={count}>
                                {i.item}, {i.count}
                            </p>
                        )
                    )}

                    <h3>screens</h3>
                    {calculateCountItems(screens).map((i, count) => (
                        <p key={count}>
                            {i.item}, {i.count}
                        </p>
                    ))}

                    <h3>lang</h3>
                    {calculateCountItems(languages).map((i, count) => (
                        <p key={count}>
                            {i.item}, {i.count}
                        </p>
                    ))}
                    <button onClick={() => navigate(-1)}>button</button>
                </>
            ) : (
                <p>Заванатження</p>
            )}
        </div>
    );
};

export default StatisticsPage;
