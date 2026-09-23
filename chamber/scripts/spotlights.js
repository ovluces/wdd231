const membersUrl = 'data/members.json';
// const cards = document.querySelector('#cards');

async function getData() {
  try {
    const responseMembers = await fetch(membersUrl);
    if (responseMembers.ok) {
      const membersData = await responseMembers.json();
      // console.log(membersData);
      const membershipToSpotligh = [2, 3];
      const dataFiltered = membersData.datos.filter(item => membershipToSpotligh.includes(item.membershiplevel));

      // console.log(dataFiltered); // testing only

      const indices = Array.from(dataFiltered.keys());
      indices.sort(() => Math.random() - 0.5); //sort the indices (keys) ramdonly
      // console.log(indices);
      if (indices.length > 3) {
        indices.length = 3; //keep only the 3 first elements
      }
      // console.log(indices);

      displayMenbersData(dataFiltered, indices); // uncomment when ready
    } else {
      throw Error(await responseMembers.text());
    }
  } catch (error) {
    console.log(error);
  }
}



getData();

const displayMenbersData = (datos, indices) => {
  document.getElementById("spotlights").innerHTML = "";
  indices.forEach((indice) => {

    let card = document.createElement('section');
    // let indiceN = document.createElement('p');
    let fullName = document.createElement('h3');
    let imageContainer = document.createElement('div');
    let image = document.createElement('img');
    let address = document.createElement('p');
    let companyPhoneNumber = document.createElement('p');
    let companyWebsiteURL = document.createElement('a');
    let companyLevel = document.createElement('p');

    // indiceN.textContent = `${indice}`;
    fullName.textContent = `${datos[indice].companyName}`;
    address.textContent = `${datos[indice].companyAddresses.street}. ${datos[indice].companyAddresses.city}, ${datos[indice].companyAddresses.state} - ${datos[indice].companyAddresses.country}. ${datos[indice].companyAddresses.zip}`;
    companyPhoneNumber.textContent = `${datos[indice].companyPhoneNumber}`
    companyWebsiteURL.textContent = `${datos[indice].companyName}`;
    image.setAttribute('src', datos[indice].imageFileName);
    image.setAttribute('alt', `Portrait of ${datos[indice].companyName}`);
    image.setAttribute('loading', 'lazy');
    image.setAttribute('width', '15');
    image.setAttribute('height', '15');
    imageContainer.classList.add('contenedorImagen');
    imageContainer.appendChild(image);
    companyWebsiteURL.setAttribute('href', datos[indice].companyWebsiteURL);
    companyWebsiteURL.setAttribute('target', '_blank');

    switch (datos[indice].membershiplevel) {
      case 1:
        companyLevel.textContent = `Bronze Level`;
        break;
      case 2:
        companyLevel.textContent = `Silver Level`;
        break;
      case 3:
        companyLevel.textContent = `Gold Level`;
        break;
      default:
        console.log("Fruta no conocida.");
    }



    card.classList.add('ficha');
    // card.appendChild(indiceN);
    card.appendChild(imageContainer);
    card.appendChild(fullName);
    card.appendChild(address);
    card.appendChild(companyPhoneNumber);
    card.appendChild(companyWebsiteURL);
    card.appendChild(companyLevel);

    document.getElementById("spotlights").appendChild(card);

  });
}