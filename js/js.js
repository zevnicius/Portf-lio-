const sky = document.querySelector(".sky");

const STAR_COUNT = 250;

/* Função aleatória */
function random(min, max) {
  return Math.random() * (max - min) + min;
}

/* Cria estrelas fixas */
for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement("div");
  star.classList.add("star");

  /* Posição fixa */
  star.style.left = `${random(0, window.innerWidth)}px`;
  star.style.top = `${random(0, window.innerHeight)}px`;

  /* Brilho aleatório */
  star.style.setProperty("--min", random(0.1, 0.4));
  star.style.setProperty("--max", random(0.6, 1));

  /* Ritmo de brilho */
  star.style.animationDuration = `${random(2, 6)}s`;
  star.style.animationDelay = `${random(0, 5)}s`;

  /* Tamanho variado */
  const size = random(1, 3);
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  sky.appendChild(star);
}


/* Scroll para a seção Sobre */
document
  .querySelector(".scroll-star-vertical")
  .addEventListener("click", () => {
    document.querySelector("#about").scrollIntoView({
      behavior: "smooth"
    });
  });

/* Scroll para a seção Projetos */

const meteorBtn = document.querySelector(".meteor-btn");

meteorBtn.addEventListener("click", () => {
    const projectsSection = document.querySelector("#projects");

    if (projectsSection) {
        projectsSection.scrollIntoView({
            behavior: "smooth"
        });
    }
});
