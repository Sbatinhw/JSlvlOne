"use strict";

let goToTopEl = document.querySelector("div#goToTop");

window.addEventListener('scroll', function (event) {
    if (window.pageYOffset > 500) {
        goToTopEl.style.display = 'block';
    } else {
        goToTopEl.style.display = "none";
    }
});
