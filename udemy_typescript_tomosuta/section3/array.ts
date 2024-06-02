const prefecture: string[] = [
  '北海道',
  '青森県',
  '岩手県',
  '宮城県',
  '秋田県',
  '山形県'
];

for (let i: number = 0; i < prefecture.length; i++) {
  console.log(prefecture[i]);
}

// for ~ of構文
for (let name of prefecture) {
  console.log(name);
}

// console.table(配列);
console.table(prefecture);

