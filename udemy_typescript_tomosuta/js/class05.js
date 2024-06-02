"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Food {
    constructor() {
        this.name = "";
        this.price = 0;
    }
    getTaxPrice() {
        return this.price * 1.08;
    }
}
class Stationary {
    constructor() {
        this.name = "";
        this.price = 0;
        this.width = 0;
        this.height = 0;
    }
    getTaxPrice() {
        return this.price * 1.1;
    }
}
const peach = new Food();
peach.price = 200;
console.log(peach.getTaxPrice());
const stationary = new Stationary();
stationary.price = 300;
console.log(stationary.getTaxPrice());
