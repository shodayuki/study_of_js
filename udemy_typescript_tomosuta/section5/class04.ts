abstract class Item {
  name: string = "";
  price: number = 0;
  abstract getTaxPrice(): number;
}

class Food extends Item {
  getTaxPrice(): number {
    return this.price * 1.08;
  }
}

class Stationery extends Item {
  getTaxPrice(): number {
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