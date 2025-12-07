const dialogue = [
  "Hello Mike !",
  "Comment ça va ?",
  "Tu es prêt pour un petit cadeau ?",
  "Clique encore",
  "Encore...",
  "Encooore.... :)",
  "Encore un petit clic..."
];

let currentIndex = 0;

const dialogueElement = document.getElementById("dialogue");
const nextBtn = document.getElementById("nextBtn");
const gift = document.getElementById("gift");

nextBtn.addEventListener("click", () => {
  if (currentIndex < dialogue.length - 1) {
    currentIndex++;
    dialogueElement.textContent = dialogue[currentIndex];
  } else {
    gift.style.display = "block";
    nextBtn.disabled = true;
  }
});

const snowContainer = document.getElementById("snow");

function createFlake() {
  const flake = document.createElement("div");
  flake.classList.add("flake");

  flake.style.left = Math.random() * window.innerWidth + "px";

  const size = Math.random() * 10 + 5;
  flake.style.fontSize = size + "px";

  const duration = Math.random() * 5 + 5;
  flake.style.animationDuration = duration + "s";

  flake.textContent = "❆";

  snowContainer.appendChild(flake);

  setTimeout(() => {
    if (flake.parentElement) {
      snowContainer.removeChild(flake);
    }
  }, duration * 1000);
}

setInterval(createFlake, 200);
