"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor() {
        this.name = "";
        this.price = 0;
    }
}
class Food extends Item {
    getTaxPrice() {
        return this.price * 1.08;
    }
}
class Stationery extends Item {
    getTaxPrice() {
        return this.price * 1.1;
    }
}
const peach = new Food();
const pencil = new Stationery();
peach.name = "もも";
peach.price = 200;
pencil.name = "鉛筆";
console.log(peach.name);
console.log(peach.getTaxPrice());
