interface Item {
  name: string;
  price: number;
  getTaxPrice(): number;
}

interface Size {
  width: number;
  height: number;
}

class Food implements Item {
  name: string = "";
  price: number = 0;
  getTaxPrice(): number {
    return this.price * 1.08;
  }
}

class Stationary implements Item, Size {
  name: string = "";
  price: number = 0;
  width: number = 0;
  height: number = 0
  getTaxPrice(): number {
    return this.price * 1.1;
  }
}

const peach = new Food();
peach.price = 200;
console.log(peach.getTaxPrice());

const stationary = new Stationary();
stationary.price = 300;
console.log(stationary.getTaxPrice());