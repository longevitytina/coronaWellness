console.log("solution add js connected")
const API_BASE = "/api"
const problemId = window.location.pathname.split("/")[2]

function updateForm(problem) {
    const nameInput = document.getElementById("name")
    const descriptionInput = document.getElementById("description")
    const imageInput = document.getElementById("image")
    const linkInput = document.getElementById("link")

}

document.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("clicked")
    const name = document.getElementById("name")
    const description = document.getElementById("description")
    const image = document.getElementById("image")
    const link = document.getElementById("link")
  
    const newSolution = {
      name: name.value,
      description: description.value,
      image: image.value,
      link: link.value,
    }
    console.log("submit", newSolution)
  
    // REDIRECT TO PROBLEM PAGE
    fetch(`${API_BASE}/problems/${problemId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSolution),
    })
      .then((stream) => stream.json())
      .then((res) => {
        console.log(res)
        window.location = `/problems/${problemId}`
      })
      .catch((err) => console.log(err))
  })
  