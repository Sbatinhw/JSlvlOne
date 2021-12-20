"use strict";

RequestMoney();

function RequestMoney() {
    let money = prompt("Укажите количество денег для пополнения:");
    alert(Report(money));
}

function Report(money) {
    let report;
    let rubles;
    switch (money % 10) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            rubles = "рублей";
            break;
        case 1:
            rubles = "рубль";
            break;
        case 2:
        case 3:
        case 4:
            rubles = "рубля";
            break;
        default:
            return "Введено некорректное значение";
    }
    report = `Ваша сумма в ${money} ${rubles} успешно зачислена.`
    return report;
}