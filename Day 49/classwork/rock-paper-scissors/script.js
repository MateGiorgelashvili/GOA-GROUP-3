let userChoiceText = document.getElementById("user-choice");
let compChoiceText = document.getElementById("computer-choice");

let winnerText = document.getElementById("winner");

const choices = ["rock", "paper", "scissors"];

// buttons
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

// functions
function getRandomItem(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

function Winner(userChoice) {
  const compChoice = getRandomItem(choices);
  compChoiceText.textContent = compChoice;

  if (userChoice === compChoice) {
    winnerText.textContent = "Tie!";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    winnerText.textContent = "You won!";
  } else {
    winnerText.textContent = "Computer won!";
  }
}

// event listeners
rockBtn.addEventListener("click", function () {
  userChoiceText.textContent = "rock";
  Winner("rock");
});

paperBtn.addEventListener("click", function () {
  userChoiceText.textContent = "paper";
  Winner("paper");
});

scissorsBtn.addEventListener("click", function () {
  userChoiceText.textContent = "scissors";
  Winner("scissors");
});
