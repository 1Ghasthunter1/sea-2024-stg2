const config = {
  identifier: "admin",
  password: "huntersnap2024",
};

var passwordHintElement = document.getElementById("password-hint");

function authenticate(ident, pass) {
  return ident === config.identifier && pass === config.password;
}

function handleLogin(evt) {
  evt.preventDefault();

  const identifier = evt.target.elements.identifier.value;
  const password = evt.target.elements.password.value;

  //grab the element that is child of the sign in button with classname spinner
  let spinner = document.querySelector(".spinner");
  let errorP = document.getElementById("login-error");
  let loginButton = document.getElementById("login-button");

  //show the spinner
  spinner.style.display = "block";
  errorP.style.display = "none";
  loginButton.disabled = true;

  //delay for 1 second
  setTimeout(() => {
    const authResult = authenticate(identifier, password);
    spinner.style.display = "none";
    loginButton.disabled = false;

    if (authResult) {
      window.localStorage.setItem("auth", true);
      window.location.href = "/index.html";
    } else {
      errorP.style.display = "block";
      errorP.innerText = "Invalid username or password";
    }
  }, 1000);
}

function showPasswordHint() {
  passwordHintElement.innerHTML =
    "User: " + config.identifier + " Password: " + config.password;
}
