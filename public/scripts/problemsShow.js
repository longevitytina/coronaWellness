console.log('too much fun')
const API_BASE = '/api'
const problems = document.getElementById('problem')
const problemId = window.location.pathname.split('/')[2]
// console.log(window.location.pathname.split('/')[2]);

console.log('Problem ID =', problemId)

// get a problem
function getProblem() {
    fetch(`${API_BASE}/problems/${problemId}`)
        .then((stream) => stream.json())
        .then(res => render(res))
        .catch((err) => console.log(err))
}

getProblem()

function render(problemObject) {
    console.log('Rendering Problem Object', problemObject)
    const problemTemplate = getProblemTemplate(problemObject)
    problems.innerHTML = ''
    problems.insertAdjacentHTML('beforeend', problemTemplate)
}

function getProblemTemplate(problem) {
    console.log('Getting Problem Template')
    return `
        <div class="col-md-4 mb-4">
        <div id="${problem._id}" class="card">
          <img src="${problem.image}" class="card-img-top" alt="${problem.name}" />
          <div class="card-body">
            <h5 class="card-title">
              ${problem.name}
            </h5>
            <p class="card-text">${problem.description}</p>
            <a href="#" class="btn btn-primary float-right">View</a>
          </div>
        </div>
      </div>
        `
}