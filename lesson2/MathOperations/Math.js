"use strict";

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return Addition(arg1, arg2);
        case "-":
            return Subtraction(arg1, arg2);
        case "/":
            return Division(arg1, arg2);
        case "*":
            return Multiplication(arg1, arg2);
        default:
            return "некорректная операция";
    }
}