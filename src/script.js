burger = document.querySelector(".burger");
opac = document.querySelector(".opac");
headNav = document.querySelector(".headNav");
rightNav = document.querySelector(".rightNav");

burger.addEventListener("click", show);

function show() {
  document.getElementById("head").style.height = "220px";
  document.getElementById("head").style.transitionDuration = ".085s";
  rightNav.style.opacity = 100;
}
