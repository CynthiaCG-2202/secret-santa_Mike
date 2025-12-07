// -----------------------------
// DIALOGUE + MACHINE À ÉCRIRE
// -----------------------------

const dialogue = [
  "Hello Mike !",
  "Comment ça va ?",
  "Tu es prêt pour un petit cadeau ?",
  "Clique encore",
  "Encore...",
  "Encooore.... :)",
  "Je peux faire ça encore longtemps tu sais ?",
  "C'est facile, je peux mettre autant",
  "de phrase",
  "que je",
  "veux",
  "bon par contre",
  "clique pas trop vite même si c'est chiant",
  "sinon tu vas avoir une creepypasta en guise de dialogue",
  "enfin après",
  "tu peux essayer mais j'garantie rien",
  "ah tu n'as pas essayé d'appuyer vite ?",
  "cool",
  "enfin bref",
  "je fais ça pour faire durer",
  "car sinon en soi mon cadeau est simple",
  "mais je voulais le donner en mode original t'as capté",
  "bon ok j'arrête de t'ennuyer",
  "Joyeux Noel !",
  "...",
  "...",
  "...",
  "...",
  "...",
  "...",
  "... ok j'arrête.",
  "Pour de vrai.",
  "Joyeux Noël Mike !", 
];

let currentIndex = 0;

const dialogueElement = document.getElementById("dialogue");
const nextBtn = document.getElementById("nextBtn");
const giftSection = document.getElementById("gift");

// Effet machine à écrire
function typeWriter(text, element, speed = 40) {
  element.textContent = "";
  let i = 0;

  function writeLetter() {
    if (i < text.length) {
      element.textContent += text[i];
      i++;
      setTimeout(writeLetter, speed);
    }
  }

  writeLetter();
}

// On remplace le premier message direct
typeWriter(dialogue[0], dialogueElement);

// Quand on clique sur "Suivant"
nextBtn.addEventListener("click", () => {
  if (currentIndex < dialogue.length - 1) {
    currentIndex++;
    typeWriter(dialogue[currentIndex], dialogueElement);
  } else {
    nextBtn.disabled = true;
    giftSection.style.display = "flex"; // on affiche les cadeaux
  }
});


// -----------------------------
// CADEAUX FLOUS QUI SE RÉVÈLENT
// -----------------------------

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("gift-img")) {
    e.target.classList.add("revealed");
  }
});


// -----------------------------
// EFFET NEIGE (ton code d'origine)
// -----------------------------

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

// LIGHTBOX POUR AGRANDIR LE CADEAU
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// quand on clique sur un cadeau → on l'ouvre en grand
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("gift-img")) {
    const fullSrc = e.target.src;
    lightboxImg.src = fullSrc;
    lightbox.style.display = "flex";
  }
});

// cliquer n'importe où pour fermer
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
  lightboxImg.src = "";
});
