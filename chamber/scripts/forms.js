const formulario = document.getElementById('form');
const campo = document.getElementById('organizationalTitle');
document.getElementById("timestampField").defaultValue = document.lastModified;



const regex = /^[A-Za-z\s-]{7,}$/;

formulario.addEventListener('submit', function (event) {
  if (!regex.test(campo.value)) {
    event.preventDefault();
    alert('Error: Organizational Title only accept alpha characters, hyphens, and spaces with a minimum of seven (7) characters');
  } else {

  }
});