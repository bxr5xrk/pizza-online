export const findedItem = (arr, item) => arr.find((i) => i.item === item);

export const calculateCountItems = (arr) => {
    let newArr = [];
    newArr.push({ item: arr[0], count: 1 });

    arr.slice(1).forEach((i) => {
        const item = findedItem(newArr, i);

        item ? item.count++ : newArr.push({ item: i, count: 1 });
    });

    return newArr;
};
