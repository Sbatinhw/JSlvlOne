"use strict";

let button = document.querySelector("button");
let message = document.querySelector(".message");
let mySound = new Audio("notification.mp3");

button.addEventListener('click', function () {
    message.style.transform = `translateY(-${message.clientHeight}px)`;
    mySound.play();
});

