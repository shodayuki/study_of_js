const division = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('0では割れません。');
  }

  return a / b;
}

try {
  console.log(division(10, 2));
} catch (error: any) {
  console.log(error.message);
}