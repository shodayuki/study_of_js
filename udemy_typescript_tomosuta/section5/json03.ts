const itemStr: string = '{"name": "いちご", "price": 150';

try {
  const itemParse: any = JSON.parse(itemStr);
  console.log(itemParse.name);
} catch (error) {
  console.log('JSONの形式が正しくありません。');
}

console.log("プログラムを続けました");