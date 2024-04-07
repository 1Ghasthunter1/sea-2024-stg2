const people = [
  {
    firstName: "Hunter",
    lastName: "Pruett",
    age: 20,
    pfpUrl: "/img/hunter-bitmoji-pfp.webp",
    fullUrl: "/img/hunter-bitmoji-full.webp",
    school: "Glendale CC",
  },
  {
    firstName: "Manvel",
    lastName: "Muradyan",
    age: 19,
    pfpUrl:
      "https://sdk.bitmoji.com/render/panel/10226022-99292531260_4-s5-v1.webp?transparent=1&scale=0",
    fullUrl: "/img/hunter-bitmoji-full.webp",
    school: "UCLA",
  },
];

//make mutable copy of people
let mPeople = people.slice();

var peopleContainer = document.getElementById("people-container");

var personCard = document.getElementById("person-card");

function createCard(person) {
  var card = personCard.cloneNode(true);
  card.id = "card-" + person.firstName.toLowerCase();
  card.querySelector(".card-name").innerText =
    person.firstName + " " + person.lastName;
  card.querySelector(".card-img").src = person.pfpUrl;
  card.querySelector(".card-school").innerText = person.school;

  return card;
}

function showPeople() {
  //  clear children
  peopleContainer.innerHTML = "";

  mPeople.forEach((person) => {
    var card = createCard(person);
    console.log(peopleContainer);
    peopleContainer.appendChild(card);
  });
}

window.addEventListener("load", showPeople);
