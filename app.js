let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const generateComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  //rock, paper, scissors
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was Draw");
  msg.innerText = "Game was Draw. Play Again!";
  msg.style.backgroundColor = "goldenrod";
};

const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore = userScore + 1;
    userScorePara.innerText = userScore;
    console.log("You Win!");
    msg.innerText = `You Win! Your ${userChoice} beats ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    computerScore = computerScore + 1;
    computerScorePara.innerText = computerScore;
    console.log("You Lose!");
    msg.innerText = `You Lose! ${computerChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("User CHoice = ", userChoice);
  //generate computer choice
  const computerChoice = generateComputerChoice();
  console.log("Computer Choice = ", computerChoice);

  if (userChoice == computerChoice) {
    //Draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      // scissors, paper
      userWin = computerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      // rock, scissors
      userWin = computerChoice === "scissors" ? false : true;
    } else {
      // rock, paper
      userWin = computerChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("Choice was Clicked ", userChoice);
    playGame(userChoice);
  });
});
