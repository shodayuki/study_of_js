// export defaultで宣言したものはimportでのクラス名は自由に設定できる
// export defaultはそのファイルでは1回しか使えない
export const tax: number = 1.1

export default abstract class Item {
  price: number = 0;
  name: string = '';
  abstract getTaxPrice(): number;
}