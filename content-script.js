const people = [
  {
    id: 1,
    firstName: "Hunter",
    lastName: "Pruett",
    age: 20,
    pfpUrl: "/img/hunter-bitmoji-pfp.webp",
    fullUrl: "/img/hunter-bitmoji-full.webp",
    school: "Glendale CC",
  },
  {
    id: 2,
    firstName: "Manvel",
    lastName: "Muradyan",
    snapchat: "manvel091",
    career: "SWE @ Arista Networks",
    bio: "Making friends and trying to pave a career worth talking about.",
    food: "Steak",
    age: 19,
    pfpUrl:
      "https://sdk.bitmoji.com/render/panel/10226022-99292531260_4-s5-v1.webp?transparent=1&scale=0",
    fullUrl:
      "https://images.bitmoji.com/3d/avatar/452520973-99292531260_4-s5-v1.webp",
    school: "UCLA",
  },
  {
    id: 3,
    firstName: "Arman",
    lastName: "Tarverdyan",
    age: 19,
    pfpUrl:
      "https://sdk.bitmoji.com/render/panel/10226558-354029233_92-s5-v1.webp?transparent=1&scale=0",
    fullUrl:
      "https://images.bitmoji.com/3d/avatar/452520973-354029233_92-s5-v1.webp",
    school: "UCLA",
  },
];

//make mutable copy of people
let mPeople = people.slice();

var peopleContainer = document.getElementById("people-container");
var personCard = document.getElementById("person-card");
var searchInput = document.querySelector(".search-input");
var floatingCard = document.getElementById("floating-card");
var fullBitmojiImg = document.getElementById("full-bitmoji-img");

function createCard(person) {
  var card = personCard.cloneNode(true);
  card.id = "card-" + person.firstName.toLowerCase();
  card.querySelector(".card-name").innerText =
    person.firstName + " " + person.lastName;
  card.querySelector(".card-img").src = person.pfpUrl;
  card.querySelector(".card-school").innerText = person.school;

  // add an onclick for the card
  card.addEventListener("click", () => {
    selectPerson(person.id);
  });

  return card;
}

function showPeople() {
  //  clear children
  peopleContainer.innerHTML = "";

  mPeople.forEach((person) => {
    var card = createCard(person);
    peopleContainer.appendChild(card);
  });
}

function selectPerson(id) {
  const person = people.find((person) => person.id === id);
  if (!person) return;
  floatingCard.querySelector("h2").innerText = `Hi, I'm ${person.firstName}`;
  floatingCard.querySelector("img").src = person.pfpUrl;
  fullBitmojiImg.src = person.fullUrl;
}

let debounceTimer;

function onSearchInput() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    mPeople = people.filter((person) => {
      return (
        person.firstName
          .toLowerCase()
          .includes(searchInput.value.toLowerCase()) ||
        person.lastName.toLowerCase().includes(searchInput.value.toLowerCase())
      );
    });
    showPeople();
  }, 200);
}

window.addEventListener("load", showPeople);
searchInput.addEventListener("input", onSearchInput);
