let dice: number;
for (let i: number = 0; i < 100; i++) {
  dice = Math.floor(Math.random() * 6 + 1);
  console.log(dice);

  if (dice === 1) {
    break;
  }
}