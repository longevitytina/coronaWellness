console.log("connected solutionsIndex JS")
console.log("sanity check")
const API_BASE = "/api"
const solutions = document.getElementById("solutions")
const solutionForm = document.getElementById("editSolution")
const solutionId = window.location.pathname.split("/")[4]
const problemId = window.location.pathname.split("/")[2]

// get one solutions
fetch(`${API_BASE}/problems/${problemId}/solutions/${solutionId}`)
  .then((stream) => stream.json())
  .then((res) => render(res))
  .catch((err) => console.log(err))

// update form values
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

// Listen/Handle New Post Submit
solutionForm.addEventListener("save", (event) => {
  event.preventDefault()

  const name = document.getElementById("name")
  const description = document.getElementById("description")
  const image = document.getElementById("image")
  const link = document.getElementById("link")

  const updatedSolution = {
    name: name.value,
    description: description.value,
    image: image.value,
    link: link.value,
  }
  console.log("submit", updatedSolution)

  // REDIRECT TO PROBLEM PAGE
  fetch(`${API_BASE}/problems/${problemId}/solutions/${solutionId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedSolution),
  })
    .then((stream) => stream.json())
    .then((res) => {
      console.log(res)
      window.location = `/problems/${problemId}`
    })
    .catch((err) => console.log(err))
})
