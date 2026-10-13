const treeDetails = document.querySelector("#tree-details");

function displayTreeDetails(tree) {
  treeDetails.innerHTML = '';
  treeDetails.innerHTML = `
    <button id="closeModal" class="close-button">❌</button>
    <h3>${tree.cientificName}</h3>
    <p>${tree.otherInformation}</p> `
    ;
  treeDetails.showModal();

  closeModal.addEventListener("click", () => {
    treeDetails.close();
  });
}