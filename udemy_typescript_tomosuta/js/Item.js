"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tax = void 0;
// export defaultで宣言したものはimportでのクラス名は自由に設定できる
// export defaultはそのファイルでは1回しか使えない
exports.tax = 1.1;
class Item {
    constructor() {
        this.price = 0;
        this.name = '';
    }
}
exports.default = Item;
