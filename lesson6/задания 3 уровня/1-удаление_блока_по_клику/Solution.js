"use strict";

let elements = document.querySelectorAll("button, .close");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function (event) {
        closeClickHandler(event);
    });
}

function closeClickHandler(event) {
    event.currentTarget.parentNode.style.display = "none";
}