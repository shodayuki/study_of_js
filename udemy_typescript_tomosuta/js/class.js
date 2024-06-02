"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Item {
    constructor() {
        // プロパティ
        this.name = '';
        this.stock = 0;
    }
    // メソッド
    buy(count) {
        if (count <= this.stock) {
            this.stock -= count;
            return true;
        }
        else {
            return false;
        }
    }
}
let peach = new Item();
peach.name = 'もも';
peach.stock = 3;
console.log(peach.name);
console.log(peach.stock);
console.log(peach.buy(2));
console.log(peach.buy(2));
