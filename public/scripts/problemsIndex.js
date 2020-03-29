const API_BASE = "/api"
const problems = document.getElementById("problems")

// get all problems
fetch(`${API_BASE}/problems`)
  .then((stream) => stream.json())
  .then((res) => render(res))
  .catch((err) => console.log(err))

function render(problemsArray) {
  const problemTemplate = problemsArray
    .map((problem) => getProblemTemplate(problem))
    .join("")
  problems.insertAdjacentHTML("beforeend", problemTemplate)
}

function getProblemTemplate(problem) {
  return `
        <div class="col-md-4 mb-4">
        <div id="${problem._id}" class="card  shadow-lg p-3 mb-5 bg-white rounded ">
          <img src="${problem.image}" class="card-img-top" alt="${problem.name}" />
          <div class="card-body">
            <h5 class="card-title">
              ${problem.name}
            </h5>
            <p class="card-text">${problem.description}</p>
            <a href="/problems/${problem._id}" class="btn  btn-outline-info float-right">View</a>
          </div>
        </div>
      </div>
        `
}
