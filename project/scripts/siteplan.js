let T_a = 10;
let v = 5;

function calculateWindChill(T_a, v) {
  return (13.12 + 0.6215 * T_a - 11.37 * v ** 0.16 + 0.3965 * T_a * v ** 0.16).toFixed(2) + 'º C';
}


document.getElementById("lastModified").innerHTML = document.lastModified;
document.getElementById('currentyear').innerHTML = new Date().getFullYear();

if (T_a <= 10 && v > 4.8) {
  document.getElementById('windchill').innerHTML = calculateWindChill(T_a, v);
} else {
  document.getElementById('windchill').innerHTML = "N/A";
}

