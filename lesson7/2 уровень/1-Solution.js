"use strict";

let elements = document.querySelectorAll("button");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function () {
        let dataAtr = event.target.attributes;
        for (let j = 0; j < dataAtr.length; j++) {
            console.log(dataAtr[j].value);
        }
        console.log();
    });
}