"use strict";

let element = document.querySelector("ul");
element.onclick = function (event) {
    console.log(event.target);
}