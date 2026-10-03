const courseDetails = document.querySelector("#course-details");

function displayCourseDetails(course) {
  courseDetails.innerHTML = '';
  courseDetails.innerHTML = `
    <button id="closeModal" class="close-button">❌</button>
    <h3>${course.title}</h3>
    <p>${course.description}</p>
    <p><strong>Cost: $</strong>${course.prize} anual</p>



  `;
  courseDetails.showModal();

  closeModal.addEventListener("click", () => {
    courseDetails.close();
  });
}