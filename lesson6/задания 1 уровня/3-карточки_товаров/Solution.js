"use strict";

let elements = document.querySelectorAll(".product");

for (let i = 0; i < elements.length; i++) {
    elements[i].style.backgroundColor = 'green';
}

elements = document.querySelectorAll(".productName");
for (let i = 0; i < elements.length; i++) {
    elements[i].style.fontSize = "24px";
}