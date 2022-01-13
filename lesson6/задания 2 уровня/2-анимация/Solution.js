"use strict";

let btn = document.querySelector("button");
let msg = document.querySelector(".message");

btn.onclick = function (event) {
    msg.style = "display: block";
    msg.classList.add("animate__animated");
    msg.classList.add("animate__fadeInLeftBig");
}

