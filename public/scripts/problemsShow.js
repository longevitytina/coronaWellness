const API_BASE = "/api";
const problemSolutions = document.getElementById("problemSolutions");
const problemId = window.location.pathname.split("/")[2];

// get a problem
function getProblemSolutions() {
  fetch(`${API_BASE}/problems/${problemId}`)
    .then(stream => stream.json())
    .then(res => render(res))
    .catch(err => console.log(err));
}

getProblemSolutions();

function render(problemObject) {
  const solutionsTemplates = problemObject.solutions
    .map(getSolutionTemplate)
    .join("");
  problemSolutions.innerHTML = "";
  problemSolutions.insertAdjacentHTML("beforeend", solutionsTemplates);
}

function getSolutionTemplate(solution) {
  return `
        <div class="col-md-4 mb-4">
        <div id="${solution._id}" class="card">
          <img src="${solution.image}" class="card-img-top" alt="${solution.name}" />
          <div class="card-body">
            <h5 class="card-title">
              ${solution.name}
            </h5>
            <p class="card-text">${solution.description}</p>
            <a href="/solutions/#" class="btn btn-primary float-right">View</a>
            <button id="deleteBtn" class="btn btn-sm btn-danger delete-solution float-right mr-2" type="button">Delete Solution</button>
          </div>
        </div>
      </div>
        `;
}

// Delete a solution
problemSolutions.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete-solution')) {
    deleteSolution(event);
  }
});


function deleteSolution(event) {
  const solutionId = event.target.parentNode.parentNode.id;
  console.log('Deleting Solution ID = ', solutionId);

  fetch(`${API_BASE}/problems/${problemId}/solutions/${solutionId}`, {
    method: 'DELETE',
  })
    .then((stream) => stream.json())
    .then((res) => {
      console.log(res);
      // Rerender with updated problem page
      console.log('getting problems solutions')
      getProblemSolutions();
    })
    .catch((err) => console.log(err));
}
