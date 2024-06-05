class Item {
  name: string = "";
  price: number = 0;

  getTaxPrice(): number {
    return Math.floor(this.price * 1.1);
  }
}

class Food extends Item {
  limit_date: number = 0;

  getTaxPrice(): number {
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