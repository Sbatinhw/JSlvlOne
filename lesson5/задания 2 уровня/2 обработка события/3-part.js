"use strict";

let element = document.querySelector("div");
element.onclick = function (event) {
    console.log(event.target.getAttribute("class"));
    console.log(event.target.getAttribute("id"));
    console.log(event.target.getAttribute("tabindex"));
    console.log(event.target.getAttribute("aria-labelledby"));
    console.log(event.target.getAttribute("aria-hidden"));

}
