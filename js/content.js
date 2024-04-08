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
    pfpUrl:
      "https://sdk.bitmoji.com/render/panel/10226428-305990390_51-s5-v1.webp?transparent=1&scale=2",
    fullUrl:
      "https://images.bitmoji.com/3d/avatar/452520973-305990390_51-s5-v1.webp",
    school: "GCC",
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
    school: "GCC",
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
    school: "GCC",
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
    school: "GCC",
  },
  {
    id: 7,
    firstName: "Harut",
    lastName: "Mnatsakanyan",
    flag: "🇺🇸 🇦🇲",
    snapchat: "Harut17",
    job: "Glendale Economic Development",
    bio: "My name is Harut and I will be transferring out of GCC this coming Fall.",
    food: "Shawarma",
    age: 19,
    pfpUrl:
      "https://sdk.bitmoji.com/render/panel/10226019-424525581_31-s5-v1.webp?transparent=1&scale=2",
    fullUrl:
      "https://images.bitmoji.com/3d/avatar/452520973-424525581_31-s5-v1.webp",
    school: "GCC",
  },
];

const colors = ["#1554d1", "#ff00ee", "#04ff00"];

//make mutable copy of people
let mPeople = people.slice();

var peopleContainer = document.getElementById("people-card-container");
var personCard = document.getElementById("person-card");
var searchInput = document.querySelector("#search-bar");
var floatingCard = document.getElementById("floating-card");
var fullBitmojiImg = document.getElementById("full-bitmoji-img");
var floatingCardPerson = floatingCard.querySelector(".person");
var floatingCardStats = floatingCard.querySelector(".stats");
var histogramTable = document.getElementById("histogram-table");
var histogramEntry = histogramTable.querySelector(".histogram-entry");
var histogramLabel = histogramEntry.querySelector(".histogram-label");
var histogramBar = histogramEntry.querySelector(".histogram-bar");

var avgAge = floatingCardStats.querySelector(".avg-age");
var mostPopularSchool = floatingCardStats.querySelector(".pop-school");
var mostPopularFood = floatingCardStats.querySelector(".pop-food");

function createCard(person) {
  var card = personCard.cloneNode(true);
  card.id = "card-" + person.firstName.toLowerCase();
  card.querySelector(".card-name").innerText =
    person.firstName + " " + person.lastName;
  card.querySelector(".card-img").src = person.pfpUrl;
  card.querySelector(".card-school").innerText = person.school;
  card.querySelector("#edit-person-btn");

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
  hideStats();

  const person = people.find((person) => person.id === id);
  if (!person) return;
  floatingCard.querySelector("h2").innerText = `${person.firstName}${
    person.lastName.length > 0 ? ` ${person.lastName[0]}.` : ""
  }`;
  floatingCard.querySelector("img").src = person.pfpUrl;
  floatingCard.querySelector(".bio").innerText = person.bio;
  floatingCard.querySelector(
    ".snapchat"
  ).innerText = `@${person.snapchat} ${person.flag}`;
  floatingCard.querySelector(".school").innerText = person.school;
  floatingCard.querySelector(".food").innerText = person.food;
  floatingCard.querySelector(".job").innerText = person.job;
  floatingCard.querySelector(".age").innerText = person.age;
  floatingCard.querySelector("#edit-person-btn").onclick = () =>
    showModal(person.id);
  fullBitmojiImg.src = person.fullUrl;
}

function deletePerson(id) {
  const index = people.findIndex((person) => person.id === id);
  if (index === -1) return;
  people.splice(index, 1);
  mPeople = people.slice();
  showPeople();
  if (mPeople.length > 0) setPerson(mPeople[0].id);
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

function showStats() {
  generateSchoolHistogram();
  fullBitmojiImg.style.display = "none";
  floatingCardPerson.style.display = "none";
  floatingCardStats.style.display = "block";
  floatingCard.style.width = "70%";
}

function hideStats() {
  fullBitmojiImg.style.display = "block";
  floatingCardPerson.style.display = "block";
  floatingCardStats.style.display = "none";
  floatingCard.style.width = "100%";
}

function signOut() {
  window.localStorage.clear();
  window.location.href = "/auth/login.html";
}

function generateSchoolHistogram() {
  const schools = people.reduce((acc, person) => {
    acc[person.school] = acc[person.school] ? acc[person.school] + 1 : 1;
    return acc;
  }, {});

  const textMostPopSchool = Object.entries(schools).reduce((a, b) =>
    a[1] > b[1] ? a : b
  );
  mostPopularSchool.innerText = textMostPopSchool[0];

  const foods = people.reduce((acc, person) => {
    acc[person.food] = acc[person.food] ? acc[person.food] + 1 : 1;
    return acc;
  }, {});

  const textMostPopFood = Object.entries(foods).reduce((a, b) =>
    a[1] > b[1] ? a : b
  );

  mostPopularFood.innerText = textMostPopFood[0];

  const averageAge =
    people.reduce((acc, person) => acc + person.age, 0) / people.length;

  avgAge.innerText = Math.round(averageAge * 10) / 10;

  // clear children
  histogramTable.innerHTML = "";

  Object.entries(schools).forEach(([school, count], i) => {
    var entry = histogramEntry.cloneNode(true);
    var color = colors[i % colors.length];
    entry.querySelector(".histogram-label").innerText = school;
    entry.querySelector(".histogram-bar").style.width = `${
      (count / people.length) * 100
    }%`;
    entry.querySelector(".histogram-bar").style.backgroundColor = color;
    histogramTable.appendChild(entry);
  });
}

var modalContainer = document.getElementById("modal-container");

function showModal(id) {
  modalContainer.style.display = "flex";

  const person = people.find((person) => person.id === id);
  if (!person) return;

  var modal = document.getElementById("modal");

  modal.querySelector(
    ".modal-title"
  ).innerText = `Edit ${person.firstName}'s profile`;
  modal.querySelector('input[name="id"]').value = person.id;
  modal.querySelector('input[name="name"]').value = `${person.firstName}${
    person.lastName != "" ? ` ${person.lastName}` : ""
  }`;
  modal.querySelector('input[name="school"]').value = person.school;
  modal.querySelector('input[name="job"]').value = person.job;
  modal.querySelector('input[name="age"]').value = person.age;
  modal.querySelector('input[name="food"]').value = person.food;

  modal.querySelector("#modal-delete").onclick = () => {
    deletePerson(id);
    hideModal();
  };
}

function hideModal() {
  modalContainer.style.display = "none";
}

function handleSubmit(evt) {
  evt.preventDefault();

  const name = evt.target.elements.name.value;
  const school = evt.target.elements.school.value;
  const job = evt.target.elements.job.value;
  const age = evt.target.elements.age.value;
  const food = evt.target.elements.food.value;
  const id = evt.target.elements.id.value;

  const person = mPeople.find((person) => {
    return person.id === Number(id);
  });
  if (!person) return;

  if (name.length === 0) {
    alert("Please enter a name");
    return;
  }

  var names = name.split(" ");

  console.log(names);

  var firstName = names[0];
  var lastName = names.length > 1 ? names[1] : "";

  console.log(lastName);

  person.firstName = firstName;
  person.lastName = lastName;
  person.school = school;
  person.job = job;
  person.age = Number(age);
  person.food = food;

  //update mPeople with the new person
  mPeople.map((oldPerson) => {
    if (oldPerson.id === Number(id)) {
      return person;
    }
    return oldPerson;
  });

  showPeople();
  setPerson(Number(id));
  hideModal();
}
