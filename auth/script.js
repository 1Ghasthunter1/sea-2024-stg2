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
  let errorP = document.getElementById("login-error");
  let loginButton = document.getElementById("login-button");

  //show the spinner
  spinner.style.display = "block";
  errorP.style.display = "none";
  loginButton.disabled = true;

  //delay for 1 second
  setTimeout(() => {
    const authResult = authenticate(username, password);
    spinner.style.display = "none";
    loginButton.disabled = false;

    if (authResult) {
      window.location.href = "/index.html";
    } else {
      errorP.style.display = "block";
      errorP.innerText = "Invalid username or password";
    }
  }, 1000);
}
