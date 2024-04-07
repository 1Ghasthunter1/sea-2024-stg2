const people = [
  {
    id: 1,
    firstName: "Hunter",
    lastName: "Pruett",
    flag: "🇦🇲 🇬🇷",
    snapchat: "pruettthepilot",
    job: "Prev @ Applied Medical",
    bio: "Moving the needle in humanitarian initiatives aid through tech. Part-time altar boy at St Sophia Cathedral.",
    food: "Armenian BBQ",
    age: 20,
    pfpUrl: "/img/hunter-bitmoji-pfp.webp",
    fullUrl: "/img/hunter-bitmoji-full.webp",
    school: "Glendale CC",
  },
  {
    id: 2,
    firstName: "Manvel",
    lastName: "Muradyan",
    flag: "🇦🇲",
    snapchat: "manvel091",
    job: "SWE @ Arista Networks",
    bio: "Making friends and trying to pave a career worth talking about.",
    food: "Steak",
    age: 19,
    pfpUrl:
      "https://sdk.bitmoji.com/render/panel/10226022-99292531260_4-s5-v1.webp?transparent=1&scale=2",
    fullUrl:
      "https://images.bitmoji.com/3d/avatar/452520973-99292531260_4-s5-v1.webp",
    school: "UCLA",
  },
  {
    id: 3,
    firstName: "Arman",
    lastName: "Tarverdyan",
    flag: "🇦🇲",
    snapchat: "arman0717",
    job: "Co-founder @ DegreeMentors",
    bio: "Prospective Juris Doctorate candidate with aspirations of building a career in corporate law.",
    food: "Sushi",
    age: 19,
    pfpUrl:
      "https://sdk.bitmoji.com/render/panel/10226558-354029233_92-s5-v1.webp?transparent=1&scale=2",
    fullUrl:
      "https://images.bitmoji.com/3d/avatar/452520973-354029233_92-s5-v1.webp",
    school: "Woodbury",
  },
  {
    id: 4,
    firstName: "Gohar",
    lastName: "Dzhulakyan",
    flag: "🇦🇲",
    snapchat: "gog_dzh",
    job: "Emperador Law Firm",
    bio: "Freshman at GCC",
    food: "French fries",
    age: 18,
    pfpUrl:
      "https://sdk.bitmoji.com/render/panel/10226013-99640376036_7-s5-v1.webp?transparent=1&scale=2",
    fullUrl:
      "https://images.bitmoji.com/3d/avatar/708455430-99640376036_7-s5-v1.webp",
    school: "Glendale Community College",
  },
  {
    id: 5,
    firstName: "Claris",
    lastName: "Boghosian",
    flag: "🇦🇲",
    snapchat: "claris_arm",
    job: "Kaloon Collection LLC",
    bio: "My name is Claris Boghosian and I am a Political Science Major at GCC.",
    food: "Tolma",
    age: 22,
    pfpUrl:
      "https://sdk.bitmoji.com/render/panel/10226021-99843477123_10-s5-v1.webp?transparent=1&scale=2",
    fullUrl:
      "https://images.bitmoji.com/3d/avatar/708455430-99843477123_10-s5-v1.webp",
    school: "Glendale CC",
  },
  {
    id: 6,
    firstName: "Nicole",
    lastName: "Tsaroukian",
    flag: "🇦🇲 🇬🇪",
    snapchat: "nicole.tsa",
    job: "Coffee Bean",
    bio: "First-year undergrad pre-med student who loves to crochet and watch movies",
    food: "Tata Boraniiiiiiiiii",
    age: 18,
    pfpUrl:
      "https://sdk.bitmoji.com/render/panel/10226681-495738347_38-s5-v1.webp?transparent=1&scale=2",
    fullUrl:
      "https://images.bitmoji.com/3d/avatar/451978050-495738347_38-s5-v1.webp",
    school: "Glendale CC",
  },
  {
    id: 7,
    firstName: "Harut",
    lastName: "Mnatsakanyan",
    flag: "🇺🇸 🇦🇲",
    snapchat: "Harut17",
    job: "Glendale Economic Development",
    bio: "My name is Harut and I will be transferring out of Glendale Community College this coming Fall.",
    food: "Shawarma",
    age: 19,
    pfpUrl:
      "https://sdk.bitmoji.com/render/panel/10226019-424525581_31-s5-v1.webp?transparent=1&scale=2",
    fullUrl:
      "https://images.bitmoji.com/3d/avatar/452520973-424525581_31-s5-v1.webp",
    school: "Glendale CC",
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
    setPerson(person.id);
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

function setPerson(id) {
  const person = people.find((person) => person.id === id);
  if (!person) return;
  floatingCard.querySelector(
    "h2"
  ).innerText = `${person.firstName} ${person.lastName[0]}.`;
  floatingCard.querySelector("img").src = person.pfpUrl;
  floatingCard.querySelector(".bio").innerText = person.bio;
  floatingCard.querySelector(
    ".snapchat"
  ).innerText = `@${person.snapchat} ${person.flag}`;
  floatingCard.querySelector(".school").innerText = person.school;
  floatingCard.querySelector(".food").innerText = person.food;
  floatingCard.querySelector(".job").innerText = person.job;
  floatingCard.querySelector(".age").innerText = person.age;

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

window.addEventListener("load", () => {
  showPeople();
  setPerson(1);
});
searchInput.addEventListener("input", onSearchInput);
