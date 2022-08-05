export const findedItem = (arr, item) => arr.find((i) => i.item === item);

export const calculateCountItems = (arr) => {
    let newArr = [];
    newArr.push({ item: arr[0], count: 1 });

    arr.slice(1).forEach((i) => {
        const item = findedItem(newArr, i);

        item ? item.count++ : newArr.push({ item: i, count: 1 });
    });

    return newArr.sort((a, b) => (b.count > a.count ? 1 : -1));
};

export const calculatePizzaItemsCount = (pizzaObj) => {
    const arr = [].concat.apply([], pizzaObj);
    const newArr = [];
    newArr.push({ item: arr[0].pizza, count: arr[0].count });

    arr.slice(1).forEach((i) => {
        const item = findedItem(newArr, i.pizza);

        item
            ? (item.count += i.count)
            : newArr.push({ item: i.pizza, count: i.count });
    });

    return newArr.sort((a, b) => (b.count > a.count ? 1 : -1));
};

export const calculateIncomePerMonth = (arr) => {
    const newArr = [];
    newArr.push({
        date: arr[0].time.slice(0, 7),
        price: arr[0].totalPrice,
        count: 1,
    });

    const findedItem = (item) =>
        newArr.find((i) => i.date.slice(0, 7) === item.slice(0, 7));

    arr.slice(1).forEach((i) => {
        const item = findedItem(i.time);

        if (item) {
            item.price += i.totalPrice;
            item.count++;
        } else {
            newArr.push({
                date: i.time.slice(0, 7),
                price: i.totalPrice,
                count: 1,
            });
        }
    });
    return newArr.sort((a, b) => (b.count > a.count ? 1 : -1));
};
