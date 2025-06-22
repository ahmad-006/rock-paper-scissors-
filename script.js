//targeting html elements
let yourScoreHTML = document.querySelector(".curScore");
let highScoreHTML = document.querySelector(".highScore");
let userImg = document.querySelector(".user-img");
const botImg = document.querySelector(".bot-img");
const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorsButton = document.querySelector(".scissors-btn");
const imgDiv = document.querySelector(".img-Sec");

//initializing
let wins, loses;
wins = 0;
loses = 0;
const botChoices = ["rock", "paper", "scissors"];

// functions
const checkWinner = (userChoice) => {
  if (userChoice === "rock") {
    switch (randomChoice) {
      case "rock":
        null;
        break;
      case "paper":
        loses += 1;
        break;
      case "scissors":
        wins += 1;

        break;
    }
  } else if (userChoice === "paper") {
    switch (randomChoice) {
      case "rock":
        wins += 1;
        break;
      case "paper":
        null;
        break;
      case "scissors":
        loses += 1;
        break;
    }
  } else {
    switch (randomChoice) {
      case "rock":
        loses += 1;
        break;
      case "paper":
        wins += 1;
        break;
      case "scissors":
        null;
        break;
    }
  }

  yourScoreHTML.textContent = wins;
  highScoreHTML.textContent = loses;
  //   console.log(yourScoreHTML, highScoreHTML);
};

rockButton.addEventListener("click", () => {
  randomChoice = botChoices[Math.trunc(Math.random() * 3)];
  console.log(randomChoice);
  checkWinner("rock");
  imgDiv.classList.remove("hidden");
  userImg.src = `images/rock-emoji.png`;
  botImg.src = `images/${randomChoice}-emoji.png`;
});

paperButton.addEventListener("click", () => {
  randomChoice = botChoices[Math.trunc(Math.random() * 3)];
  console.log(randomChoice);
  checkWinner("paper");
  imgDiv.classList.remove("hidden");
  userImg.src = `images/paper-emoji.png`;
  botImg.src = `images/${randomChoice}-emoji.png`;
});

scissorsButton.addEventListener("click", () => {
  randomChoice = botChoices[Math.trunc(Math.random() * 3)];
  console.log(randomChoice);
  checkWinner("scissors");
  imgDiv.classList.remove("hidden");
  userImg.src = `images/scissors-emoji.png`;
  botImg.src = `images/${randomChoice}-emoji.png`;
});
