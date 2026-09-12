const url = 'data/members.json';
// const cards = document.querySelector('#cards');

async function getData() {
  const response = await fetch(url);
  const data = await response.json();
  displayData(data.datos);
}

getData();

const displayData = (datos) => {
  document.getElementById("datos").innerHTML = "";
  datos.forEach((dato) => {

    let card = document.createElement('section');
    let fullName = document.createElement('h3');
    let imageContainer = document.createElement('div');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let companyPhoneNumber = document.createElement('p');
    let companyWebsiteURL = document.createElement('a');

    fullName.textContent = `${dato.companyName}`;
    address.textContent = `${dato.companyAddresses.street}. ${dato.companyAddresses.city}, ${dato.companyAddresses.state} - ${dato.companyAddresses.country}. ${dato.companyAddresses.zip}`;
    companyPhoneNumber.textContent = `${dato.companyPhoneNumber}`
    companyWebsiteURL.textContent = `${dato.companyName}`;
    image.setAttribute('src', dato.imageFileName);
    image.setAttribute('alt', `Portrait of ${dato.companyName}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '15');
    image.setAttribute('height', '15');
    imageContainer.classList.add('contenedorImagen');
    imageContainer.appendChild(image);
    companyWebsiteURL.setAttribute('href', dato.companyWebsiteURL);
    companyWebsiteURL.setAttribute('target', '_blank');

    // card.classList.add('ficha');
    card.appendChild(imageContainer);
    card.appendChild(fullName);
    card.appendChild(address);
    card.appendChild(companyPhoneNumber);
    card.appendChild(companyWebsiteURL);

    document.getElementById("datos").appendChild(card);

  });
}