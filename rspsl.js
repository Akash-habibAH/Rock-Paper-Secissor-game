function checkWinner() {
  if (userChoice === compChoice) {
    winner = "";
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")||
    (userChoice === "rock" && compChoice === "lizard") ||
    (userChoice === "lizard" && compChoice === "spock") ||
    (userChoice === "spock" && compChoice === "scissors") ||
    (userChoice === "secissors" && compChoice === "lizard") ||
    (userChoice === "paper" && compChoice === "spock") ||
    (userChoice === "spock" && compChoice === "rock")||
    (userChoice === "lizard" && compChoice === "paper")
  ) {
    winner = "user";
  } else {
    winner = "comp";
  }
}