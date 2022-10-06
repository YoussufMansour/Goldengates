let intro1 = document.querySelectorAll(".intro1");
let nav = document.getElementsByTagName("nav")[0];
let navAnchors = document.querySelectorAll("nav li a");
let navList = document.querySelector(".nav-list");
let logoImg = document.querySelectorAll(".logo img");
let myspan = document.querySelectorAll(".intro1 span");
let scroller = document.querySelectorAll(".scroll-bar div");
let scrollDiv = document.querySelector(".scroll-bar");
let oldScrollY = window.scrollY;
let open1 = document.querySelector("#open");
let close1 = document.querySelector("#close");
let backgroundImg1 = document.querySelector(".main-background1");
let backgroundImg2 = document.querySelector(".main-background2");

document.body.onscroll = function () {
  if (window.scrollY > 0 && window.scrollY < 99) {
    nav.classList.add("nav-intro");
    navAnchors.forEach((e) => (e.style.color = "#fcf9f9"));
    open1.style.color = "#fcf9f9";
    close1.style.color = "#fcf9f9";

    logoImg[0].classList.add("show");
    logoImg[1].classList.remove("show");
    logoImg[2].classList.remove("show");

    document.body.style.backgroundColor = "#012a6b";
    myspan[0].style.animationDuration = "0.2s";

    scrollDiv.style.display = "none";

    intro1[0].classList.add("active");
    intro1[1].classList.remove("active");
    intro1[2].classList.remove("active");
    intro1[3].classList.remove("active");

    if (window.scrollY - oldScrollY > 5 || window.scrollY - oldScrollY < 5) {
      myspan[0].style.transform = `translateY(${oldScrollY * -0.3}px)`;
    }

    if (!checkDirection() && window.scrollY > 85) {
      myspan[0].style.animationName = "animation2";
      myspan[0].style.animationDuration = "0.2s";
    }
  }

  if (window.scrollY > 99 && window.scrollY < 1100) {
    nav.classList.remove("nav-intro");
    navAnchors.forEach((e) => (e.style.color = "rgb(34 33 33)"));
    open1.style.color = "rgb(34 33 33)";
    close1.style.color = "rgb(34 33 33)";

    logoImg[0].classList.remove("show");
    logoImg[1].classList.add("show");
    logoImg[2].classList.remove("show");
    logoImg[3].classList.remove("show");

    backgroundImg1.style.display = "none";
    backgroundImg2.style.display = "none";
    // activating the div

    document.body.style.backgroundColor = "#fcf9f9";
    intro1[0].classList.remove("active");
    intro1[1].classList.add("active");
    intro1[2].classList.remove("active");
    intro1[3].classList.remove("active");

    //moving text with the scroll
    myspan[1].style.transform = `translate(0,${(oldScrollY - 100) * -0.05}px)`;

    //Managing the scroll bar
    scrollDiv.style.display = "block";

    scroller[0].style.height = ((window.scrollY - 99) / 1000) * 100 + "%";
    scroller[1].style.height = 100 - ((window.scrollY - 99) / 1000) * 100 + "%";
    if (!checkDirection() && window.scrollY > 1095) {
      myspan[1].style.animationName = "animation2";
      myspan[1].style.animationDuration = "0.2s";
    } else if (checkDirection() && window.scrollY < 110) {
      myspan[1].style.animationName = "animation1";
      myspan[1].style.animationDuration = "0.2s";
    }
  }

  if (window.scrollY > 1100 && window.scrollY < 2100) {
    logoImg[0].classList.remove("show");
    logoImg[1].classList.remove("show");
    logoImg[2].classList.add("show");
    logoImg[3].classList.remove("show");
    navAnchors.forEach((e) => (e.style.color = "#24424f"));
    open1.style.color = "#24424f";
    close1.style.color = "#24424f";

    backgroundImg1.style.display = "block";
    backgroundImg2.style.display = "none";

    intro1[0].classList.remove("active");
    intro1[2].classList.add("active");
    intro1[1].classList.remove("active");
    intro1[3].classList.remove("active");

    if (!checkDirection() && window.scrollY > 2099) {
      myspan[2].style.animationName = "animation2";
      myspan[2].style.animationDuration = "0.2s";
    } else if (checkDirection() && window.scrollY < 1120) {
      myspan[2].style.animationName = "animation1";
      myspan[2].style.animationDuration = "0.2s";
    }

    myspan[2].style.transform = `translate(0,${(oldScrollY - 1100) * -0.05}px)`;

    scrollDiv.style.display = "block";
    scroller[0].style.height = ((window.scrollY - 1100) / 1000) * 100 + "%";
    scroller[1].style.height =
      100 - ((window.scrollY - 1100) / 1000) * 100 + "%";
  }
  if (window.scrollY > 2100 && window.scrollY < 3100) {
    intro1[0].classList.remove("active");
    intro1[2].classList.remove("active");
    intro1[1].classList.remove("active");
    intro1[3].classList.add("active");
    navAnchors.forEach((e) => (e.style.color = "#564136"));
    open1.style.color = "#564136";
    close1.style.color = "#564136";

    logoImg[0].classList.remove("show");
    logoImg[1].classList.remove("show");
    logoImg[2].classList.remove("show");
    logoImg[3].classList.add("show");

    backgroundImg1.style.display = "none";
    backgroundImg2.style.display = "block";

    if (checkDirection() && window.scrollY < 2120) {
      myspan[3].style.animationName = "animation1";
      myspan[3].style.animationDuration = "0.2s";
    }

    myspan[3].style.transform = `translate(0,${(oldScrollY - 2100) * -0.05}px)`;

    scrollDiv.style.display = "block";
    scroller[0].style.height = ((window.scrollY - 2100) / 1000) * 100 + "%";
    scroller[1].style.height =
      100 - ((window.scrollY - 2100) / 1000) * 100 + "%";
  }
  if (window.scrollY > 3100) {
    scroller[0].style.height = "100%";
    scroller[1].style.height = "0%";
  }

  oldScrollY = window.scrollY;
};

let checkDirection = function () {
  if (oldScrollY < window.scrollY) {
    return true;
  } else {
    oldScrollY = window.scrollY;
    return false;
  }
};
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
