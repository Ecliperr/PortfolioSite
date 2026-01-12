let lastScrollY = window.scrollY;
const nav = document.querySelector(".nav-bar");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if ((currentScrollY > lastScrollY) & (currentScrollY > 100)) {
    nav.classList.add("hide");
  } else {
    nav.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});

const logo = document.querySelector(".logo");
const navBar = document.querySelector(".nav-bar");

logo.addEventListener("click", (e) => {
  if (window.innerWidth <= 800) {
    e.preventDefault();
    navBar.classList.toggle("hide");
  }
});

const title = document.querySelector(".my-title");

if (title) {
  const titles = [
    "Software Engineer",
    "Front-End Developer",
    "Full-Stack Fanatic",
    "Hobby Artist",
  ];

  let i = 0;

  const current = title.textContent.trim();
  const startIndex = titles.indexOf(current);
  if (startIndex !== -1) i = startIndex;

  setInterval(() => {
    title.classList.add("is-fading");

    setTimeout(() => {
      i = (i + 1) % titles.length;
      title.textContent = titles[i];
      title.classList.remove("is-fading");
    }, 800);
  }, 4000);
}

const learnMore = document.querySelector(".learn-more");

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function onScroll() {
  const fadeDistance = 500;

  const y = window.scrollY;
  const opacity = clamp(1 - y / fadeDistance, 0, 1);

  learnMore.style.opacity = opacity;
  learnMore.style.pointerEvents = opacity < 0.05 ? "none" : "auto";
}

window.addEventListener("scroll", onScroll, { passive: true });
onScroll();
