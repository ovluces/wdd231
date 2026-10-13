const treeDataUrl = 'data/trees.json';

async function getData() {
  try {
    const response = await fetch(treeDataUrl);
    if (response.ok) {
      const treeData = await response.json();
      // console.log(treeData);
      createTreeCard(treeData.datos);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getData();

function createTreeCard(trees) {
  document.querySelector(".container").innerHTML = "";
  trees.forEach(tree => {
    let card = document.createElement("section");
    let nombreCientifico = document.createElement("h2")
    let nombreComun = document.createElement("p");
    let otherInf = document.createElement("p");
    let img = document.createElement("img");
    let button = document.createElement("button");

    card.classList.add('card');
    // card.classList.add('hover');
    nombreCientifico.innerHTML = `<span class="label">Specie (Cientific Name):</span> ${tree.cientificName}`;
    nombreComun.innerHTML = `<span class="label">Comun name:</span> ${tree.comunName}`;
    // otherInf.innerHTML = `<span class="label">Other Inf:</span> ${tree.otherInformation}`;
    img.setAttribute("src", tree.imageFileName);
    img.setAttribute("alt", `${tree.nombreComun} Specie`);
    img.setAttribute("width", "250");
    img.setAttribute("height", "250");
    img.setAttribute("loading", "lazy");

    button.textContent = "Learn more...";
    button.classList.add('button');
    button.classList.add('open-button');

    card.appendChild(nombreCientifico);
    card.appendChild(nombreComun);
    // card.appendChild(otherInf);
    card.appendChild(img);
    card.appendChild(button);

    document.querySelector(".container").appendChild(card);

    button.addEventListener('click', () => {
      displayTreeDetails(tree);
    });
  });
}