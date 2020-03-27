console.log("connected solutionsIndex JS")
console.log("sanity check")
const API_BASE = "/api"
const solutions = document.getElementById("solutions")
const solutionId = window.location.pathname.split("/")[4]
const problemId = window.location.pathname.split("/")[2]

// get all solutions
fetch(`${API_BASE}/problems/${problemId}/solutions/${solutionId}`)
  .then((stream) => stream.json())
  .then((res) => render(res))
  .catch((err) => console.log(err))

// function render(solutionsArray) {
//   console.log("Rendering update form", solutionsArray)
//   const problemTemplate = solutionsArray
//     .map((problem) => updateForm(problem))
//     .join("")
//   solutions.insertAdjacentHTML("beforeend", problemTemplate)
// }

function updateForm(solution) {
  console.log("solution = ", solution)
  const nameInput = document.getElementById("name")
  const descriptionInput = document.getElementById("description")
  const imageInput = document.getElementById("image")
  const linkInput = document.getElementById("link")

  nameInput.value = solution.name
  descriptionInput.value = solution.description
  imageInput.value = solution.image
  linkInput.value = solution.link
}
