const sky = document.querySelector('.sky');
const STAR_COUNT = 200;

for (let i = 0; i < STAR_COUNT; i++) {
  const star = document.createElement('span');
  star.classList.add('star');

  const size = Math.random() * 2 + 1;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;

  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;

  star.style.setProperty('--min', Math.random() * 0.2);
  star.style.setProperty('--max', Math.random() * 0.8 + 0.2);
  star.style.animationDuration = `${Math.random() * 3 + 2}s`;

  sky.appendChild(star);
}


/* METEORO SCROLL */

document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.meteor-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.querySelector(btn.dataset.target);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  const sections = document.querySelectorAll('section');

  let activeSection = null;

  const observer = new IntersectionObserver(
    entries => {

      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection = entry.target;
        }
      });

      if (!activeSection) return;

      sections.forEach(section => {
        const btn = section.querySelector('.meteor-scroll');
        if (btn) btn.classList.add('hidden');
      });

      const activeBtn = activeSection.querySelector('.meteor-scroll');
      if (activeBtn) activeBtn.classList.remove('hidden');

    },
    {
      threshold: 0.35
    }
  );

  sections.forEach(section => observer.observe(section));

});


//Tabela

const rows = document.querySelectorAll('.project-row');
const previewImage = document.getElementById('previewImage');
const defaultImage = previewImage.src;

function changeImage(src) {
  previewImage.style.opacity = 0;
  previewImage.style.transform = 'scale(1.02)';

  setTimeout(() => {
    previewImage.src = src;
    previewImage.style.opacity = 1;
    previewImage.style.transform = 'scale(1)';
  }, 300);
}

rows.forEach(row => {
  row.addEventListener('mouseenter', () => {
    changeImage(row.dataset.image);
  });
});

document.querySelector('.project-table').addEventListener('mouseleave', () => {
  changeImage(defaultImage);
});

/* HAMBURGER MENU */
const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-list");
const navLinks = document.querySelectorAll(".nav-list a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navList.classList.toggle("active");
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navList.classList.remove("active");
  });
});
