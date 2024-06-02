// ジェネリック関数、ジェネリクス
function getRandomChar<Type>(...chars: Type[]): Type {
  const index: number = Math.floor(Math.random() * chars.length);
  return chars[index];
}

console.log(getRandomChar<string>("1", "a", "A"));
console.log(getRandomChar<number>(1, 2, 3, 4));