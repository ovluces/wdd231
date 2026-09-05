const navButtom = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

//Togle the show class off and on

navButtom.addEventListener('click', () => {
  navButtom.classList.toggle('show');
  navLinks.classList.toggle('show');
});