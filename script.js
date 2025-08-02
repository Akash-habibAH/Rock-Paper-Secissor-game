const rspSection = document.querySelector(".RSP");
const rspslSection = document.querySelector(".RSPSL");
const topSection = document.querySelector(".displayHome");
const userScore = document.querySelector(".score");
const rock = document.getElementById("rockImage");
const paper = document.getElementById("paperImage");
const scissors = document.getElementById("scissorsImage");
const lizard = document.getElementById("lizardImage");
const spock = document.getElementById("spockImage");
const resultBlock = document.getElementById("resultMessage");
const imageUserSelect = document.getElementById("usersImage");
const imageCompSelect = document.getElementById("compsImage");
const exitBtn = document.getElementById("crossIcon");
const playNextBtn = document.querySelector(".playAgain");// iss per event listner lagana haa kaa iss per koi click karay too dobara button activate hoon orr cross icon per bhi click karay too dobara index.html file per a jay
const rulesBtn = document.querySelector(".rulesButton");
const procedureSection = document.querySelector(".gameProcedure");
const scrollUpSection = document.querySelector(".scrollUpInitial");
let userChoice, compChoice, usersTurn = true, winner;
rock.addEventListener("click", () => handleUserChoice("rock"));
paper.addEventListener("click", () => handleUserChoice("paper"));
scissors.addEventListener("click", () => handleUserChoice("scissors"));
lizard.addEventListener("click", () => handleUserChoice("lizard"));
spock.addEventListener("click", () => handleUserChoice("spock"));
exitBtn.addEventListener("click", () => {
    // when it runs user redirect to index.html file because now user on rsp.html
});
window.addEventListener("scroll", () => {// yaa sahi kamm nahi kara
    scrollUpSection.classList.remove("scrollUp");
    topSection.classList.remove("bluredTop");
});
function handleUserChoice(choice) {
    if (!usersTurn) return;
    setTimeout(() => {
        showIconToScrollUp();
        computerTurn();
        gameWorking(choice);
    }, 200);
    userChoice = choice;
    usersTurn = false;
    setTimeout(() => {
        checkWinner();
        updateScore();
        displayWinner();
        disableButtons();
    }, 500);
}
playNextBtn.addEventListener("click", () => {
    usersTurn = true;
    enableButtons();
    procedureSection.classList.remove("flexedGameProcedure");
    procedureSection.classList.add("gameProcedure");
});
function gameWorking(userSelection) {
    procedureSection.classList.add("flexedGameProcedure");
    procedureSection.classList.remove("gameProcedure");
    imageUserSelect.src = `images/icon-${userSelection}.svg`;
    imageUserSelect.classList.add("images");
}
function computerTurn() {
    const choices = ["rock", "paper", "scissors"];
    compChoice = choices[Math.floor(Math.random() * choices.length)];
    imageCompSelect.src = `images/icon-${compChoice}.svg`;
    imageCompSelect.classList.add("images");
}
function updateScore() {
    if (winner === "user") {
        userScore.innerText = parseInt(userScore.innerText) + 1;
    } else if (winner === "comp") {
        userScore.innerText = parseInt(userScore.innerText) - 1;
    }
}
function displayWinner() {
    if (winner === "user") {
        resultBlock.innerText = "YOU WIN";
        playNextBtn.style.color = " hsl(217, 16%, 45%)";
    } else if (winner === "comp") {
        resultBlock.innerText = "YOU LOSE";
        playNextBtn.style.color = "red";
    } else {
        resultBlock.innerText = "IT'S TIE";
        playNextBtn.style.color = " hsl(217, 16%, 45%)";
    }
}
function disableButtons() {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
}
function enableButtons() {
    rock.disabled = false;
    paper.disabled = false;
    scissors.disabled = false;
}
function showIconToScrollUp() {
    scrollUpSection.classList.add("scrollUp");
    topSection.classList.add("bluredTop");
}

const rulesImage = document.createElement("img");
rulesBtn.addEventListener("click", () => {
    rulesImage.src = "images/image-rules.svg";
    rulesImage.alt = "image of rules";
    rulesImage.classList.add("rulesImg");
    rulesImage.append("gameProcedure");
});


