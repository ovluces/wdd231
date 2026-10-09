import {
  places
} from '../data/sites.mjs'
// console.log(places)

const displaySitesData = (datos, indices) => {
  document.getElementById("allplaces").innerHTML = "";
  datos.forEach((dato) => {
    // console.log(dato);
    let card = document.createElement('section');
    let siteName = document.createElement('h2');
    let photographFigure = document.createElement('figure');
    let photograph = document.createElement('img');
    let description = document.createElement('p');
    let address = document.createElement('address');
    let button = document.createElement("button");

    siteName.textContent = `${dato.name}`;
    address.textContent = `${dato.address}`;
    description.textContent = `${dato.descripcion}`;

    photograph.setAttribute('src', dato.url_foto);
    photograph.setAttribute('alt', `Portrait of ${dato.siteName}`);
    photograph.setAttribute('loading', 'lazy');
    photograph.setAttribute('width', '300');
    photograph.setAttribute('height', '200');
    photograph.classList.add('hover');

    photographFigure.appendChild(photograph);


    button.textContent = "Learn more...";
    button.classList.add('button');
    button.classList.add('open-button');

    // card.classList.add('allplaces');
    card.appendChild(siteName);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(photographFigure);
    card.appendChild(button);

    document.getElementById("allplaces").appendChild(card);
    button.addEventListener('click', () => {
      displayCourseDetails(dato);
    });

  });
}

displaySitesData(places); // uncomment when ready