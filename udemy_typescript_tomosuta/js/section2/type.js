"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 型推論
let tax = 1.1;
console.log(500 * tax);
// 列挙型（enum）
var MonthName;
(function (MonthName) {
    MonthName[MonthName["January"] = 1] = "January";
    MonthName[MonthName["Febrary"] = 2] = "Febrary";
    MonthName[MonthName["March"] = 3] = "March";
    MonthName[MonthName["April"] = 4] = "April";
    MonthName[MonthName["May"] = 5] = "May";
    MonthName[MonthName["June"] = 6] = "June";
    MonthName[MonthName["July"] = 7] = "July";
    MonthName[MonthName["August"] = 8] = "August";
    MonthName[MonthName["September"] = 9] = "September";
    MonthName[MonthName["October"] = 10] = "October";
    MonthName[MonthName["November"] = 11] = "November";
    MonthName[MonthName["December"] = 12] = "December";
})(MonthName || (MonthName = {}));
const month = MonthName.April;
console.log(month);
