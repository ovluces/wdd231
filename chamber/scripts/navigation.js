const navButtom = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');
const header = document.querySelector('header');

//Togle the show class off and on

navButtom.addEventListener('click', () => {
  navButtom.classList.toggle('show');
  navLinks.classList.toggle('show');
  header.classList.toggle('show');
});

const gridLink = document.querySelector("#grid");
const listLink = document.querySelector("#list");
const display = document.querySelector("article");

if (gridLink) {
  gridLink.addEventListener(
    "click", () => {
      display.classList.add("grid");
      display.classList.remove("list");
    });
}
if (listLink) {
  listLink.addEventListener(
    "click", () => {
      display.classList.add("list");
      display.classList.remove("grid");
    });
}