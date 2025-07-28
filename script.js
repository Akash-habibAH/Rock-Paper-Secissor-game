const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#compScore");
const rock = document.getElementById("rockImage");
const paper = document.getElementById("paperImage");
const scissor = document.getElementById("scissorImage");
const resultBlock = document.getElementById("resultMessege");
const turnIndicator = document.getElementById("tellWhoseTurn");
let userChoice, compChoice, usersTurn = true, winner;
rock.addEventListener("click", () => handleUserChoice("rock"));
paper.addEventListener("click", () => handleUserChoice("paper"));
scissor.addEventListener("click", () => handleUserChoice("scissor"));
function handleUserChoice(choice) {
    if (!usersTurn) return;
    userChoice = choice;
    usersTurn = false;
    turnIndicator.innerText = "Computer's Turn";
    disableButtons();
    setTimeout(() => {
        computerTurn();
        checkWinner();
        updateScore();
        displayWinner();
        usersTurn = true;
        turnIndicator.innerText = "Your Turn";
        enableButtons();
    }, 1000);
}
function computerTurn() {
    const choices = ["rock", "paper", "scissor"];
    compChoice = choices[Math.floor(Math.random() * choices.length)];
}
function checkWinner() {
    if (userChoice === compChoice) {
        winner = "";
    } else if (
        (userChoice === "rock" && compChoice === "scissor") ||
        (userChoice === "paper" && compChoice === "rock") ||
        (userChoice === "scissor" && compChoice === "paper")
    ) {
        winner = "user";
    } else {
        winner = "comp";
    }
}
function updateScore() {
    if (winner === "user") {
        userScore.innerText = parseInt(userScore.innerText) + 1;
    } else if (winner === "comp") {
        compScore.innerText = parseInt(compScore.innerText) + 1;
    }
}
function displayWinner() {
    if (winner === "user") {
        resultBlock.innerText = "Congratulations! You won!";
    } else if (winner === "comp") {
        resultBlock.innerText = "Computer won!";
    } else {
        resultBlock.innerText = "It's a tie!";
    }
}
function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissor.disabled = true;
}
function enableButtons() {
    rock.disabled = false;
    paper.disabled = false;
    scissor.disabled = false;
}