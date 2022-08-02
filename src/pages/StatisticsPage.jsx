import React, { useEffect, useState } from "react";
import { getOrderHistory } from "../api/PizzaService";

export const concatAll = (arr, ...arrays) => arr.concat(...arrays);
const findedItem = (arr, item) => arr.find((i) => i.item === item);

export const calculateCountItems = (arr) => {
    let newArr = [];
    newArr.push({ item: arr[0], count: 1 });

    arr.slice(1).forEach((i) => {
        const item = findedItem(newArr, i);

        item ? item.count++ : newArr.push({ item: i, count: 1 });
    });

    return newArr;
};

const StatisticsPage = () => {
    const [data, setData] = useState([]);
    const [screens, setScreens] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [pizzas, setPizzas] = useState([]);
    const [prices, setPrices] = useState([]);

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
                </>
            ) : (
                <p>Заванатження</p>
            )}
        </div>
    );
};

export default StatisticsPage;
