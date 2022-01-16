"use strict";

function ToObject(num) {
    if (ValidNum) {
        return CreateObject(num);
    }
}

function CreateObject(num) {

    return {
        units: num % 10,
        tens: Math.floor((num / 10) % 10),
        hundreds: Math.floor((num / 100) % 10)
    }
}

function ValidNum(num) {
    if (num < 0 || num > 999) {
        console.log("некорректный размер");
        return false;
    }

    return true;
}

console.log(ToObject(456));
console.log(ToObject(45));
