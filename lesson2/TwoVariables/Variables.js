"use strict";

let a = 2;
let b = 3;
if (a > 0 && b > 0) {
    console.log("разность: "+(a - b));
}
else if (a < 0 && b < 0) {
    console.log("произведение: " + (a * b));
}
else if ((a < 0) != (b < 0))
{
    console.log("сумма: "+(a + b));
}