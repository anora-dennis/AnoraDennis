const span = document.querySelector('.typing-text span');
const text = "Software Engineer";
let index = 0;
let typingForward = true;

function typeLoop() {
  if (typingForward) {
    if (index <= text.length) {
      span.textContent = text.slice(0, index) + "|";
      index++;
      setTimeout(typeLoop, 100);
    } else {
      setTimeout(() => {
        typingForward = false;
        index--; // step back to start deleting
        typeLoop();
      }, 1500); // Pause at full text
    }
  } else {
    if (index >= 0) {
      span.textContent = text.slice(0, index) + "|";
      index--;
      setTimeout(typeLoop, 50);
    } else {
      setTimeout(() => {
        typingForward = true;
        index = 0;
        typeLoop();
      }, 500); // Pause before typing again
    }
  }
}

typeLoop();


// Close the menu when a navbar link is clicked
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu-toggle').checked = false;
  });
});