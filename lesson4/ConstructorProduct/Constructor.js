"use strict";

let Product = {
    name: "",
    price: 0
};

Product.make25PercentDiscount = function(){
    this.price = this.price * 0.85;
}

let test = Product;
test.name = "test1";
test.price = 1000;
console.log(test);
test.make25PercentDiscount();
console.log(test);

class NewProduct {
    name;
    price;
    make25PercentDiscount = function () {
        this.price = this.price * 0.85;
    }
}

let test2 = new NewProduct();
test2.name = "test2";
test2.price = 2000;
console.log(test2);
test2.make25PercentDiscount();
console.log(test2);