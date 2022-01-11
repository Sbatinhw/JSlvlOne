"use strict";

let elements = document.querySelectorAll("b");

for (let i = 0; i < elements.length; i++) {
    if (!elements[i].classList.contains("sign")) {
        elements[i].classList.add("sign");
    }
}