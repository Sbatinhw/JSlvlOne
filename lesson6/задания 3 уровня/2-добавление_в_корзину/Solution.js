"use strict";

let elements = document.querySelectorAll("button");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function (event) {
        buttonClickHandler(event);
    });
}

function buttonClickHandler(event) {
    event.target.parentNode.style.background = "lightgreen";
    event.target.innerHTML = "Добавлено";
}
