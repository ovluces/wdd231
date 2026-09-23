const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=8.09&lon=-63.55&appid=d478cf8f61b657e41a37a2c1b305d793&units=imperial';
async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      // console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', `${iconsrc}`);
  weatherIcon.setAttribute('alt', `${desc}`);
  captionDesc.textContent = `${desc}`.toUpperCase();
}

const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=8.09&lon=-63.55&appid=d478cf8f61b657e41a37a2c1b305d793&units=imperial';
async function apiFetchForecast() {
  try {
    const responseForecast = await fetch(urlForecast);
    if (responseForecast.ok) {
      const dataForecast = await responseForecast.json();
      // console.log(dataForecast); // testing only
      displayResultsForecast(dataForecast); // uncomment when ready
    } else {
      throw Error(await responseForecast.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetchForecast();

const displayResultsForecast = (datos) => {
  index = 0;
  document.getElementById("datos").innerHTML = "";
  const pronosticosDiarios = datos.list.filter(item => item.dt_txt.includes("12:00:00"));
  pronosticosDiarios.forEach((item) => {
    // console.log(item);
    let card = document.createElement('section');
    let date = document.createElement('h3');
    let Temp = document.createElement('p');
    let weatherIcon = document.createElement('img');
    let desc = document.createElement('p');

    date.innerHTML = `${item.dt_txt}`;
    Temp.innerHTML = `Temp: ${item.main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
    desc.innerHTML = item.weather[0].description.toUpperCase();
    weatherIcon.setAttribute('src', `${iconsrc}`);
    weatherIcon.setAttribute('alt', `${desc}`);
    weatherIcon.setAttribute('loading', 'lazy');
    weatherIcon.setAttribute('width', '50');
    weatherIcon.setAttribute('height', '50');

    card.classList.add('ficha');
    card.appendChild(date);
    card.appendChild(Temp);
    card.appendChild(weatherIcon);
    card.appendChild(desc);

    document.getElementById("datos").appendChild(card);
    index++;
  });
}