// 型推論
let tax = 1.1;
console.log(500 * tax);

// 列挙型（enum）
enum MonthName {
  January = 1,
  Febrary = 2,
  March = 3,
  April = 4,
  May = 5,
  June = 6,
  July = 7,
  August = 8,
  September = 9,
  October = 10,
  November = 11,
  December = 12
}

const month: MonthName = MonthName.April;
console.log(month);