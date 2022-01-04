"use strict";

let stars = document.querySelectorAll("i");

for (let i = 0; i < stars.length; i++) {
    stars[i].addEventListener('mouseover', function () {
        if (!stars[i].classList.contains(goldenClass)) {
            stars[i].classList.add(goldenClass);
            PrevStarOver(stars[i]);
        }
    });
    stars[i].addEventListener('mouseout', function () {
        stars[i].classList.remove(goldenClass);
        PrevStarOut(stars[i]);
    });
}

function PrevStarOver(star) {
    let prevstar = star.previousElementSibling;
    prevstar.classList.add(goldenClass);
    PrevStarOver(prevstar);
}
function PrevStarOut(star) {
    let prevstar = star.previousElementSibling;
    prevstar.classList.remove(goldenClass);
    PrevStarOut(prevstar);
}