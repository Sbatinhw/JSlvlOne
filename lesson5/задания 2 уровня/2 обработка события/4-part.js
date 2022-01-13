"use strict";

let element = document.querySelector(".product");
element.onclick = function (event) {
    event.target.innerHTML = "<div>Другой товар</div><div>Другое описание</div>";
}