let dice: number = 0;

while (dice !== 1) {
  dice = Math.floor(Math.random() * 6 + 1);
  console.log(dice);
}