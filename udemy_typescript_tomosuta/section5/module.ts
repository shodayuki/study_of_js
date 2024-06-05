// 中括弧で囲っていないBaseItemはexport defaultしたもの
// taxはexport defaultしていないもの
import BaseItem, { tax } from './Item';

class Food extends BaseItem {
  getTaxPrice(): number {
    return this.price * tax;
  }
}

const peach = new Food();
peach.price = 200;
console.log(peach.getTaxPrice());