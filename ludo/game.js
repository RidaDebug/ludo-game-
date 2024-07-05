let dice = document.querySelectorAll(".dice");
let player1Dice = document.querySelectorAll(".r-dice");
let player2Dice = document.querySelectorAll(".g-dice");
let player3Dice = document.querySelectorAll(".y-dice");
let player4Dice = document.querySelectorAll(".b-dice");

function rollDice() {
  let player1Roll = Math.floor(Math.random() * 6) + 1;
  let player2Roll = Math.floor(Math.random() * 6) + 1;
  let player3Roll = Math.floor(Math.random() * 6) + 1;
  let player4Roll = Math.floor(Math.random() * 6) + 1;

  player1Dice.forEach((dice) => {
    dice.innerHTML = player1Roll;
  });

  player2Dice.forEach((dice) => {
    dice.innerHTML = player2Roll;
  });

  player3Dice.forEach((dice) => {
    dice.innerHTML = player3Roll;
  });

  player4Dice.forEach((dice) => {
    dice.innerHTML = player4Roll;
  });
}

rollDice();
