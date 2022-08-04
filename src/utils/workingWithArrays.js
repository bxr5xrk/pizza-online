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
