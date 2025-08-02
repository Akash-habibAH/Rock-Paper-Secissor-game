function checkWinner() {
  if (userChoice === compChoice) {
    winner = "";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    winner = "user";
  } else {
    winner = "comp";

  }
}
