const squares = document.querySelectorAll(".square");
const mole = document.querySelectorAll(".mole");
const scoreDisplay = document.getElementById("score");
const timeLeft = document.getElementById("time-left");
const start = document.getElementById("start-btn");
const playTime = document.querySelectorAll("#select-play-time");

let result = 0;
let hitPosition;
let curretTime = 5;
let timerId;
let coundDownTimerId;

playTime.forEach((time) => {
  time.addEventListener("click", (e) => {
    curretTime = e.target.value;
    timeLeft.innerHTML = curretTime;
  });
});

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      scoreDisplay.textContent = result;
      hitPosition = null;
    }
  });
});

const randomSquare = () => {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  //expan the grid by incresing the square divs
  let randomSquare = squares[Math.floor(Math.random() * squares.length)];
  randomSquare.classList.add("mole");
  hitPosition = randomSquare.id;
};

// game difficulty increese speed
const moveMole = () => {
  timerId = setInterval(randomSquare, 600);
};

const countDown = () => {
  curretTime--;
  timeLeft.textContent = curretTime;

  if (curretTime == 0) {
    clearInterval(coundDownTimerId);
    clearInterval(timerId);
    alert("Game Over! Your final score is " + result);
    resetGameData();
  }
};

//start the gmae
start.addEventListener("click", () => {
  moveMole();
  coundDownTimerId = setInterval(countDown, 1000);
});

const resetGameData = () => {
  clearInterval(timerId);
  clearInterval(coundDownTimerId);
  result = 0;
  timeLeft.innerHTML = 0;
  scoreDisplay.textContent = 0;
};
