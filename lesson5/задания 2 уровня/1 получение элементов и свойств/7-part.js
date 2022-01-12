"use strict";

let elements = document.querySelectorAll("a");

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].innerHTML);
    if (!elements[i].innerHTML.includes("ссылка")) {
        elements[i].innerHTML = "ссылка";
    };
}