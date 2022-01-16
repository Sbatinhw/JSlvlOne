"use strict";

let spanRef = document.querySelector("span");
let fromEl = document.querySelector("input");

fromEl.onchange = function (event) {
    spanRef.innerHTML = event.target.value;
}

