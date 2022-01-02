"use strict";

let card_body = document.querySelector(".card-body");

let card_link = card_body.querySelectorAll(".card-link");

for (let i = 0; i < card_link.length; i++) {
    console.log(card_link[i]);
}