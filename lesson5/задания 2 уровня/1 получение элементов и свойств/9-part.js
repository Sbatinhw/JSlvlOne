"use strict";

let elements = document.querySelectorAll("i");

for (let i = 0; i < elements.length; i++) {
    elements[i].classList.toggle("green");
}