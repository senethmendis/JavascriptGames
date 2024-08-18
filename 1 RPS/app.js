const computerChioceDisplay = document.getElementById("computer-choice");
const userChioceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");

let userChioce;
let computerChioce;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChioce = e.target.id;
    console.log(userChioce);

    userChioceDisplay.innerHTML = userChioce;
    genarateComputerChoice();
    getResults();
  })
);

const genarateComputerChoice = () => {
  const randomNuymber = Math.floor(Math.random() * 3) + 1; // 3 choices r p S

  if (randomNuymber === 1) {
    computerChioce = "rock";
  }

  if (randomNuymber === 2) {
    computerChioce = "paper";
  }
  if (randomNuymber === 3) {
    computerChioce = "scissors";
  }

  computerChioceDisplay.innerHTML = computerChioce;
};

const getResults = () => {
  if (computerChioce === userChioce) {
    result = "its a draw ❗";
  } else if (computerChioce === "rock" && userChioce === "paper") {
    result = "its a won 🎉";
  } else if (computerChioce === "rock" && userChioce === "scissors") {
    result = "its a lost 🤪";
  } else if (computerChioce === "paper" && userChioce === "scissors") {
    result = "its a win 🎉";
  } else if (computerChioce === "paper" && userChioce === "rock") {
    result = "its a lost 🤪";
  } else if (computerChioce === "scissors" && userChioce === "rock") {
    result = "its a win 🎉";
  } else if (computerChioce === "scissors" && userChioce === "paper") {
    result = "its a lost 🤪";
  } else {
    result = "Eorror";
  }

  resultDisplay.innerHTML = result;
};
