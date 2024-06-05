"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor() {
        this.name = "";
        this.price = 0;
    }
    getTaxPrice() {
        return Math.floor(this.price * 1.1);
    }
}
class Food extends Item {
    constructor() {
        super(...arguments);
        this.limit_date = 0;
    }
    getTaxPrice() {
        return Math.floor(this.price * 1.08);
    }
}
const pencil = new Item();
pencil.name = "鉛筆";
pencil.price = 100;
console.log(pencil.getTaxPrice());
const peach = new Food();
peach.name = "もも";
peach.limit_date = 10;
peach.price = 200;
console.log(peach.getTaxPrice());
