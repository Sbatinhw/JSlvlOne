"use strict";

let formEl = document.querySelector("form");
let inputs = document.querySelectorAll("input");

formEl.addEventListener('submit', function (event) {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.length == 0) {
            inputs[i].style.borderColor = "red";
            event.preventDefault();
        }
    }
});
