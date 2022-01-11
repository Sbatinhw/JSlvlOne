"use strict";

let elements = document.getElementsByTagName("h2");

for (let i = 0; i < elements.length; i++) {
    console.log(elements[i].className);
}