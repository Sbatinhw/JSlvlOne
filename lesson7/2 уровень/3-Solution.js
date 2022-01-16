"use strict";

let inputElem = document.querySelector("input");
let divElem = document.querySelector("div");

inputElem.addEventListener('input', function () {
    divElem.style.fontSize = `${event.target.value}px`;
    
});