// Based on and further developed from https://www.youtube.com/watch?v=Z-3tPXf9a7M by Kevin Powell
// I've added my own code comments explaining what's going on here, although logic is relatively simple

var floatingCardElement = document.getElementById("floating-card");

// every time the mouse moves, we'll call rotateElement fn taking the mouse move event as a parameter
document.addEventListener("mousemove", (e) => {
  rotateElement(e, floatingCardElement);
});

function rotateElement(event) {
  // grab the current mouse position on the screen, X and Y
  const x = event.clientX;
  const y = event.clientY;

  // my own addition: check if the mouse is over the cloud part of the screen, if not, exit out and don't move the card.
  var cloudContainer = document.querySelector(".app-right>.container");

  //get low and high x coords and low and high y coords of cloudContainer
  var cloudContainerRect = cloudContainer.getBoundingClientRect();

  // if we're outside of that box, in either x or y, just return and don't move the card
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

  //if we're on the cloud card, calculate the half-width and half-height of the screen

  const middleX = window.innerWidth / 2;
  const middleY = window.innerHeight / 2;

  // calculat how far we off from the center of the screen, and scale that from 0 to 45 (0 on the middle, 45 on the far edge of the screen)
  const offsetX = ((x - middleX) / middleX) * 45;
  const offsetY = ((y - middleY) / middleY) * 45;

  // for both X and y, apply that rotation to the rotateX and rotateY properties, respectively, to rotate the card.
  floatingCardElement.style.setProperty("--rotateX", offsetX + "deg");
  floatingCardElement.style.setProperty("--rotateY", -1 * offsetY + "deg");
}
