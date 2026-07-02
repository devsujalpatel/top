const arr = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const random = Math.floor(Math.random() * 3);
  console.log(arr[random]);
  return arr[random];
}

function getHumanChoice() {
  const choice = prompt("choose rock, paper and scissor: ");
  console.log(choice);
  return choice;
}


function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const player = String(humanChoice).toLowerCase();
    const computer = String(computerChoice).toLowerCase();
    if (player === computer) {
      console.log(`It's a tie! Both chose ${player}.`);
      return;
    }
    if (
      (player === "rock" && computer === "scissors") ||
      (player === "paper" && computer === "rock") ||
      (player === "scissors" && computer === "paper")
    ) {
      console.log(`You win! ${player} beats ${computer}.`);
      humanScore++;
    } else {
      console.log(`You lose! ${computer} beats ${player}.`);
      computerScore++;
    }
    console.log("Your score: ", humanScore);
    console.log("Computer score: ", computerScore);

  }

  while (humanScore < 5 && computerScore < 5) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  if (humanScore === 5) {
    console.log("You won the game!");
  } else {
    console.log("Computer won the game!");
  }
}

playGame();
