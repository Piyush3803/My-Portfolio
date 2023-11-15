const menuBtn = document.getElementById("menu");
const navbarBtn = document.getElementById("navbar");
const htmlElement = document.querySelector("html");
const bodyElement = document.querySelector("body");
const link = navbarBtn.querySelector("a");



menuBtn.onclick = function(){
  navbarBtn.classList.toggle("show");
  htmlElement.classList.toggle("no-scroll");
};

navbarBtn.onclick = function(){
    navbarBtn.classList.remove("show");
    htmlElement.classList.remove("no-scroll");
  };

ScrollOut({
  targets: "h1, h2, p, li, span, form, i"
});