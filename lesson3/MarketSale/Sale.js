"use strict";

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

console.log("Изначальные цены:");
products.forEach(elements => console.log(elements.price));
products.forEach(elements => elements.price *= 0.85);
console.log("Измененные цены:");
products.forEach(elements => console.log(elements.price));