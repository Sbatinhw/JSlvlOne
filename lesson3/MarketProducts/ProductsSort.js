"use strict";

const products = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

function compare(a, b) {
    if (a.price < b.price) {
        return -1;
    }
    if (a.price > b.price) {
        return 1;
    }
    return 0;
}

let arrayWithPhoto = products.filter(element => element.photos != undefined && element.photos.length > 0);

console.log("товары с фото:");
arrayWithPhoto.forEach(element => console.log(element));

let arraySortByPrice = products.sort(compare);

console.log("товары по возрастанию цены:")
arraySortByPrice.forEach(element => console.log(element));

