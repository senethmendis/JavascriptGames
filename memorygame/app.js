const cardArry = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },

  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },

  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },

  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArry.sort(() => 0.5 - Math.random());
const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");

const cardsWon = [];
let cradsChoose = [];
let cradsChoosenIds = [];

const checkMatch = () => {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cradsChoosenIds[0];
  const optionTwoId = cradsChoosenIds[1];
  console.log("clicjk");
  if (optionOneId == optionTwoId) {
    alert("You have clicked the same img");
  }
  if (cradsChoose[0] == cradsChoose[1]) {
    alert("found match");

    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");

    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cradsChoose);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");

    alert("sorry try again");
  }

  resultDisplay.textContent = cardsWon.length;
  cradsChoosenIds = [];
  cradsChoose = [];

  if (cardsWon.length === cardArry.length / 2) {
    resultDisplay.innerHTML = "Congrats you have found them all";
  }
};

const createBoard = () => {
  for (let idx = 0; idx < cardArry.length; idx++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", idx);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
};

createBoard();

function flipCard() {
  const cardId = this.getAttribute("data-id");
  cradsChoose.push(cardArry[cardId].name);
  cradsChoosenIds.push(cardId);
  console.log(cradsChoose);
  this.setAttribute("src", cardArry[cardId].img);
  if (cradsChoose.length === 2) {
    setTimeout(checkMatch, 500);
  }
  console.log(cradsChoosenIds);
}
