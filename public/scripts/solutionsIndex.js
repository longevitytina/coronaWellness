console.log("connected solutionsIndex JS")
console.log('sanity check')
const API_BASE = '/api'
const solutions = document.getElementById('solutions')

// get all solutions
fetch(`${API_BASE}/solutions`)
  .then((stream) => stream.json())
  .then(res => render(res))
  .catch((err) => console.log(err));

function render(solutionsArray) {
  console.log('Rendering solutions Array', solutionsArray)
  const problemTemplate = solutionsArray.map((problem) => getProblemTemplate(problem)).join('');
  solutions.insertAdjacentHTML('beforeend', problemTemplate)
}

// console.log('prob:', solutions)
function getProblemTemplate(problem) {
  console.log('Getting Problem Template');
  return `
        <div class="col-md-4 mb-4">
        <div id="${problem._id}" class="card">
          <img src="${problem.image}" class="card-img-top" alt="${problem.name}" />
          <div class="card-body">
            <h5 class="card-title">
              ${problem.name}
            </h5>
            <p class="card-text">${problem.description}</p>
            <a href="/solutions/${problem._id}" class="btn btn-primary float-right">View</a>
          </div>
        </div>
      </div>
        `
}