"use strict";

let element = document.querySelector("button");
element.onclick = function (event) {
    let et = event.target;
    console.log(et.id);
    console.log(et.className);
    console.log(et.innerHTML);
}
