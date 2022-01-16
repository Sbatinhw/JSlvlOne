"use strict";

for (let i = 1; i <= 6; i++) {
    let line = `<img src="https://picsum.photos/200/300?random=${i}" alt="pic${i}">`
    document.body.insertAdjacentHTML('afterbegin', line);
}