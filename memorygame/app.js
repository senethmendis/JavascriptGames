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

const cardsWon = [];
let cradsChoose = [];
let cradsChoosenIds = [];

const checkMatch = () => {
  const cards = document.querySelectorAll("#grid img");
  console.log("clicjk");
  if (cradsChoose[0] == cradsChoose[1]) {
    alert("found match");
    cards[cradsChoosenIds[0]].setAttribute("src", "images/white.png");
    cards[cradsChoosenIds[1]].setAttribute("src", "images/white.png");
    cards[cradsChoosenIds[0]].removeEventListener("click", flipCard);
    cardsWon.push(cradsChoose);
  }
  cradsChoose = [];
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
