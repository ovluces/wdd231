const courseDetails = document.querySelector("#course-details");

function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal" class="close-button">❌</button>
    <h3>${course.name}</h3>
    <p>${course.descripcion}</p>
    <p><strong>Cost: </strong>${course.cost}</p>



  `;
  courseDetails.showModal();

  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}