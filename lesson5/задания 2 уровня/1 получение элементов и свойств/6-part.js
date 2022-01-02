"use strict";

let elements = document.querySelectorAll(".card");

for (let i = 0; i < elements.length; i++) {
    if (elements[i].classList.contains("hidden")) {
        elements[i].classList.remove("hidden");
    }
}