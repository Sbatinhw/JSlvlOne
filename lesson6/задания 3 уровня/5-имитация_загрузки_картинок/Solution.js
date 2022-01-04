"use strict";

setTimeout(UpdatePic, 3000);

function UpdatePic() {
    let elements = document.querySelectorAll("img");
    for (let i = 0; i < elements.length; i++) {
        elements[i].src = "images/" + (i + 1) + ".jpg";
    }
}

