// Navbar fix
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixnav = header.offsetTop;

  if (window.scrollY > fixnav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger menu
const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navmenu.classList.toggle("hidden");
});
