let nav = document.querySelector("nav");
let navAnchors = document.querySelectorAll("nav li a");
let open1 = document.querySelector("#open");
let close1 = document.querySelector("#close");
let navList = document.querySelector(".nav-list");

let logoImg = document.querySelectorAll(".logo img");

document.body.onscroll = function () {
  if (window.scrollY < 50) {
    nav.classList.add("nav-intro");
  }
  if (window.scrollY > 99) {
    nav.classList.remove("nav-intro");
    nav.style.backgroundColor = "#faf7f5";
  }
};

document.body.style.backgroundColor = "#fcf9f9";
navAnchors.forEach((e) => (e.style.color = "#464646 "));
open1.style.color = "#464646";
close1.style.color = "#464646";
logoImg[0].classList.remove("show");
logoImg[1].classList.add("show");
logoImg[2].classList.remove("show");
open1.addEventListener("click", openMenu);
close1.addEventListener("click", closeMenu);

function openMenu() {
  open1.classList.add("active");
  close1.classList.add("active");
  navList.classList.add("active");
}
function closeMenu() {
  open1.classList.remove("active");
  close1.classList.remove("active");
  navList.classList.remove("active");
}
