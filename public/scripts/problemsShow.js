const API_BASE = "/api"
const problemSolutions = document.getElementById("problemSolutions")
const problemId = window.location.pathname.split("/")[2]
// const solutionEditId = window.location.pathname.split("/")[4]
const addButton = document.getElementById("addBtn")

// get a problem
function getProblemSolutions() {
  fetch(`${API_BASE}/problems/${problemId}`)
    .then((stream) => stream.json())
    .then((res) => render(res))
    .catch((err) => console.log(err))
}

getProblemSolutions()

function render(problemsObject) {
  const solutionsTemplates = problemsObject.solutions
    .map(getSolutionTemplate)
    .join("")
  problemSolutions.innerHTML = solutionsTemplates
}

function getSolutionTemplate(solution) {
  return `
        <div class="col-md-4 mb-4">


        <div id="${solution._id}" class="card  shadow-lg p-3 mb-5 bg-white rounded">
          <img src="${solution.image}" class="card-img-top" alt="${solution.name}" />
          <div class="card-body">
            <h5 class="card-title">
              ${solution.name}
            </h5>
            <p class="card-text">${solution.description}</p>
            <a href="/problems/${problemId}/solutions/${solution._id}" class="btn btn-sm btn-outline-dark float-right">Edit</a>
            <button onclick="deleteSolution(event)" id="deleteBtn" class="btn btn-sm btn-outline-danger delete-solution float-right mr-2" type="button">Delete</button>
          </div>
        </div>
      </div>
        `
}

function deleteSolution(event) {
  const solutionId = event.target.parentNode.parentNode.id
  console.log("Deleting Solution ID = ", solutionId)

  fetch(`${API_BASE}/problems/${problemId}/solutions/${solutionId}`, {
    method: "DELETE",
  })
    .then((stream) => stream.json())
    .then((res) => {
      console.log(res)
      // Rerender with updated problem page
      console.log("getting problems solutions")
      render(res)
    })
    .catch((err) => console.log(err))
}

addButton.addEventListener(
  "click",

  (event) => {
    console.log("clicked")
    window.location = `/problems/${problemId}/add`
  }
)
