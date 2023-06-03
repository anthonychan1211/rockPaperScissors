import * as readline from "node:readline/promises";
import c from "ansi-colors";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });
console.log(`





Welcome to Rock Paper Scissors!`);
console.log(`===================================================`);
let continuePlaying = true;
let gameCount = 0;
let wonGameCount = 0;
let tieGameCount = 0;
let loseGameCount = 0;
let choices = ["Rock", "Paper", "Scissors"];

while (continuePlaying === true) {
  if (gameCount === 0)
    console.log(` 
This is your first game!
  `);
  let computerChoice = Math.floor(Math.random() * 3);
  let playerPick = await rl.question(
    `What will you pick for this round? (r/p/s)  `
  );
  let valueOfPlayerPick =
    playerPick === "r"
      ? 0
      : playerPick === "p"
      ? 1
      : playerPick === "s"
      ? 2
      : undefined;
  if (valueOfPlayerPick === undefined) {
    console.log(
      `Please type 'r' for Rock, type 'p' for Paper or type 's' for Scissors`
    );
    continue;
  }
  console.log(
    `
You picked ${choices[valueOfPlayerPick]}. Your opponent picked ${choices[computerChoice]}.`
  );
  if (
    valueOfPlayerPick - computerChoice === 1 ||
    valueOfPlayerPick - computerChoice === -2
  ) {
    console.log(c.green(`Congratulations! You won this round!`));
    wonGameCount++;
  } else if (valueOfPlayerPick === computerChoice) {
    console.log(c.blue(`This is a tie game.`));
    tieGameCount++;
  } else {
    console.log(c.red(`Opps you lose this round.`));
    loseGameCount++;
  }
  gameCount++;
  console.log(`
  ===================================================
   Game History: 
-----------------------------------------------------
   Won:   ${wonGameCount} round${wonGameCount <= 1 ? "" : "s"} 
   Tie:   ${tieGameCount} round${tieGameCount <= 1 ? "" : "s"}
   Lose:  ${loseGameCount} round${loseGameCount <= 1 ? "" : "s"}`);
  const keepPlaying = await rl.question(
    `
Do you want to continue? (y/any other key)`
  );
  if (keepPlaying === "y") {
    continue;
  } else {
    console.log(`
Have a nice day!`);
    break;
  }
}
rl.close();
