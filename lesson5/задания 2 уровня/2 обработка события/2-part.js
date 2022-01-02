"use strict";

let element = document.querySelector("p");
element.onclick = function (event) {
    console.log(event.target.classList);
    event.target.classList.forEach(element => console.log(element));
}
