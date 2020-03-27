console.log('too much fun')
const API_BASE = '/api'
const problemSolutions = document.getElementById('problemSolutions')
const problemId = window.location.pathname.split('/')[2]
// console.log(window.location.pathname.split('/')[2]);

// console.log('Problem ID =', problemId)

// get a problem
function getProblemSolutions() {
    fetch(`${API_BASE}/problems/${problemId}`)
        .then((stream) => stream.json())
        .then(res => render(res))
        .catch((err) => console.log(err))
}

getProblemSolutions()

function render(problemObject) {
    console.log('Rendering Problems Object', problemObject)
    const solutionsTemplate = getSolutionsTemplate(problemObject.solutions)
    problemSolutions.innerHTML = ''
    problemSolutions.insertAdjacentHTML('beforeend', solutionsTemplate)
  }



function getSolutionsTemplate(solutions) {
  console.log('Getting Solutions Object', solutions.length)
  //solutions.map((solution) => getSolutionsTemplate(solution)).join('')
  for (let i = 0; i < solutions.length; i++) {
    console.log(solutions[i])
  return `
        <div class="col-md-4 mb-4">
        <div id="${solutions[i]._id}" class="card">
          <img src="${solutions[i].image}" class="card-img-top" alt="${solutions[i].name}" />
          <div class="card-body">
            <h5 class="card-title">
              ${solutions[i].name}
            </h5>
            <p class="card-text">${solutions[i].description}</p>
            <a href="/solutions/#" class="btn btn-primary float-right">View</a>
          </div>
        </div>
      </div>
        `
      
  }
} 