document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById('currentyear').innerHTML = new Date().getFullYear();

const visitsDisplay = document.querySelector(".visits");
const msToDays = 86400000;
let today = new Date();
// console.log(today);

let numVisits = Number(window.localStorage.getItem('numVisits-ls')) || 0;
let lastVisit = new Date(window.localStorage.getItem('lastVisit-ls'));
let daysleft = (today.getTime() - lastVisit.getTime()) / msToDays;

if (numVisits !== 0) {
  if (daysleft.toFixed(0) == 0) {
    visitsDisplay.innerHTML = `Back so soon! Awesome! <br>(Last visit: ${lastVisit}).   <br>Number of Visits: ${numVisits}`;
  } else if (daysleft.toFixed(0) == 1) {
    visitsDisplay.innerHTML = `You last visited ${daysleft.toFixed(0)} day ago. <br>(Last visit: ${lastVisit}).   <br>Number of Visits: ${numVisits}`;
  } else if (daysleft.toFixed(0) > 1) {
    visitsDisplay.innerHTML = `You last visited ${daysleft.toFixed(0)} days ago. <br>(Last visit: ${lastVisit}).   <br>Number of Visits: ${numVisits}`;
  }
} else {
  visitsDisplay.innerHTML = `Welcome! Let us know if you have any questions.`;
}

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);
// localStorage.setItem("lastVisit-ls", 'Thu Oct 07 2026 22:58:44 GMT-0400 (hora de Venezuela)')
localStorage.setItem("lastVisit-ls", today);