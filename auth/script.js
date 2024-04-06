const config = {
  username: "admin",
  password: "password",
};

function authenticate(username, password) {
  return username === config.username && password === config.password;
}

function login() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  //grab the element that is child of the sign in button with classname spinner
  let spinner = document.querySelector(".spinner");
  //show the spinner

  console.log;
  spinner.style.display = "block";

  //delay for 1 second
  setTimeout(() => {
    const authResult = authenticate(username, password);
    spinner.style.display = "none";

    if (authResult) {
      window.location.href = "/dashboard";
    } else {
    }
  }, 1000);
}
