class Item {
  private _name: string = '';
  private _stock: number = 0;

  constructor(name: string, stock: number) {
    this.name = name;
    this.stock = stock;
  }

  set name(value: string) {
    this._name = value;
  }

  get name(): string {
    return this._name;
  }

  set stock(value: number) {
    if (value >= 0) {
      this._stock = value;
    } else {
      this._stock = 0;
    }
  }

  get stock(): number {
    return this._stock;
  }
}

let peach = new Item('もも', 5);

console.log(peach.name);
console.log(peach.stock);