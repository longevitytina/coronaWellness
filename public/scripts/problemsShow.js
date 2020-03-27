console.log("too much fun");
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
  console.log("Rendering Problems Object", problemObject);
  const solutionsTemplates = problemObject.solutions
    .map(getSolutionTemplate)
    .join("");
  problemSolutions.innerHTML = "";
  problemSolutions.insertAdjacentHTML("beforeend", solutionsTemplates);
  console.log("solutionsTemplates:", solutionsTemplates);
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
          </div>
        </div>
      </div>
        `;
}
