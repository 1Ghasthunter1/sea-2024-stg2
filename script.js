var pre = document.getElementById("floating-card");


document.addEventListener("mousemove", (e) => {
  rotateElement(e, pre);
});

if (!window.localStorage.getItem("auth")) {
  window.location.href = "/auth/login.html";
}

function rotateElement(event, element) {
  const x = event.clientX;
  const y = event.clientY;

  var cloudContainer = document.querySelector(".app-right>.container");

  //get low and high x coords and low and high y coords of cloudContainer
  var cloudContainerRect = cloudContainer.getBoundingClientRect();

  if (
    !(
      x >= cloudContainerRect.left &&
      x <= cloudContainerRect.right &&
      y >= cloudContainerRect.top &&
      y <= cloudContainerRect.bottom
    )
  ) {
    return;
  }

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  const offsetX = ((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;

  element.style.setProperty("--rotateX", offsetX + "deg");
  element.style.setProperty("--rotateY", -1 * offsetY + "deg");
}


