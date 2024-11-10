const navBar = document.getElementById("nav-bar");
const info = document.getElementById("info");
const hero = document.getElementById("hero-img");

const show = () => {
  navBar.classList.add("fadeInTop");

  setTimeout(() => {
    info.classList.add("fadeInLeft");
    hero.classList.add("fadeInRight");
    info.classList.remove("not-show");
    hero.classList.remove("not-show");
  }, 600);
};
