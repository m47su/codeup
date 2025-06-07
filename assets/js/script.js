let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Carrossel de images
document.addEventListener("DOMContentLoaded", function () {
  let slider = document.querySelector(".slider");
  let list = document.querySelector(".slider .list");
  let items = document.querySelectorAll(".slider .list .item");
  let next = document.getElementById("next");
  let prev = document.getElementById("prev");
  let dots = document.querySelectorAll(".slider .dots li");

  if (!list || !next || !prev || dots.length === 0) {
    console.error("Elementos não encontrados!");
    return;
  }

  let lengthItems = items.length;
  let active = 0;
  let refreshInterval;

  list.style.transition = "transform 0.5s ease";

  function reloadSlider() {
    list.style.transform = `translateX(-${active * 100}%)`;

    dots.forEach((dot) => dot.classList.remove("active"));
    dots[active].classList.add("active");

    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => next.click(), 3000);
  }

  next.onclick = function () {
    active = (active + 1) % lengthItems;
    reloadSlider();
  };

  prev.onclick = function () {
    active = (active - 1 + lengthItems) % lengthItems;
    reloadSlider();
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      active = index;
      reloadSlider();
    });
  });

  reloadSlider();

  window.addEventListener("resize", reloadSlider);
});

document.addEventListener("DOMContentLoaded", function () {
  const bolinhas = document.querySelectorAll(".bolinha-parceiro");

  bolinhas.forEach((bolinha) => {
    bolinha.addEventListener("click", () => {
      bolinha.classList.toggle("expandido");
    });
  });
});
