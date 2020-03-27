const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const PORT = process.env.PORT || 4000

const db = require("./models")

// parse incoming urlencoded form data
// and populate the req.body object
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// allow cross origin requests (optional)
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

// ---------------------- HTML ROUTES

// Serve static files from the `/public` directory
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

// Index of Problems
app.get("/problems", (req, res) => {
  res.sendFile(__dirname + "/views/problemsIndex.html")
})

// A problem profile
app.get("/problems/:id", (req, res) => {
  res.sendFile(__dirname + "/views/problemsShow.html")
})

// // solutions index
// app.get('/problems/:id/solutions', (req, res) => {
//     res.sendFile(__dirname + '/views/solutionsIndex.html')
// })

//solution edit
app.get("/problems/:id/solutions/:solutionId", (req, res) => {
  res.sendFile(__dirname + "/views/solutionsEdit.html")
})

// ---------------------- API ROUTES

//  Problems Index
app.get("/api/problems", (req, res) => {
  db.Problem.find({}, (err, allProblems) => {
    if (err) {
      return res
        .status(400)
        .json({ status: 400, error: "Something went wrong, please try again" })
    }
    res.json(allProblems)
  })
})

// Problem Show
app.get("/api/problems/:id", (req, res) => {
  // console.log('sanity check', req.params)
  db.Problem.findById(req.params.id, (err, foundProblem) => {
    if (err) {
      return res
        .status(400)
        .json({ status: 400, error: "Something went wrong, please try again" })
    }

    res.json(foundProblem)
  })
})

// create problem
app.post("/api/problems", (req, res) => {
  db.Problem.create(req.body, (err, newProblem) => {
    if (err) {
      return res
        .status(400)
        .json({ status: 400, error: "Something went wrong, please try again" })
    }
    res.status(201).json(newProblem)
  })
})

// update problem
app.put("/api/problems/:id/edit", (req, res) => {
  // find by ID
  db.Problem.findById(req.params.id, (err, foundProblem) => {
    if (err) {
      return res.status(400).json({ status: 400, error: "please try agin" })
    }
    // update record info
    foundProblem.name = req.body.name
    foundProblem.description = req.body.description
    console.log(req.body.name)
    // save modified problem
    foundProblem.save((err, savedProblem) => {
      if (err) {
        return res.status(400).json({ status: 400, error: "please try agin" })
      }
      res.json(savedProblem)
    })
  })
})

// delete problem
app.delete("/api/problems/:id", (req, res) => {
  db.Problem.findByIdAndDelete(req.params.id, (err, deletedProblem) => {
    if (err) {
      return res.status(400).json({ status: 400, error: "please try agin" })
    }
    res.json(deletedProblem)
  })
})

//  Solutions Index
app.get("/api/solutions", (req, res) => {
  db.Solution.find({}, (err, allsolutions) => {
    if (err) {
      return res
        .status(400)
        .json({ status: 400, error: "Something went wrong, please try again" })
    }
    res.json(allsolutions)
  })
})

// Solutions Show
// app.get("/api/solutions/:solutionId", (req, res) => {
//   // console.log('sanity check', req.params)
//   db.Solution.findById(req.params.id, (err, foundSolution) => {
//     if (err) {
//       return res
//         .status(400)
//         .json({ status: 400, error: "Something went wrong, please try again" })
//     }

//     res.json(foundSolution)
//   })
// })

// Solution create
app.post("/api/solutions", (req, res) => {
  db.Solution.create(req.body, (err, newSolution) => {
    if (err) {
      return res
        .status(400)
        .json({ status: 400, error: "Something went wrong, please try again" })
    }
    res.status(201).json(newSolution)
  })
})

// update solution
app.put("/api/problems/:id/solutions/:solutionId", (req, res) => {
  console.log("connected?")
  db.Problem.findById(req.params.id, (err, foundProblem) => {
    if (err) {
      return res.status(400).json({ status: 400, error: "please try agin" })
    }
    const solutionToUpdate = foundProblem.solutions.id(req.params.solutionId)
    // find solution by ID
    //   db.Solution.findById(req.params.id, (err, foundSolution) => {
    //     if (err) {
    //       return res.status(400).json({ status: 400, error: "please try agin" })
    //     }
    if (!solutionToUpdate) {
      return res
        .status(400)
        .json({ status: 400, error: "Could not find solution" })
    }
    console.log(foundSolution)
    // update record info
    foundSolution.name = req.body.name
    foundSolution.description = req.body.description
    foundSolution.image = req.body.image
    foundSolution.link = req.body.link
    console.log(req.body.name)
    // save modified Solution
    foundProblem.save((err, savedProblem) => {
      if (err) {
        return res.status(400).json({ status: 400, error: "please try agin" })
      }
      db.Solution.findByIdAndUpdate(
        req.params.solutionId,
        req.body,
        { new: true },
        (err, updatedSolution) => {
          if (err) {
            return res.status(400).json({
              status: 400,
              error: "Something went wrong, please try again",
            })
          }

          res.json(updatedSolution)
        }
      )
    })
  })
})

// delete solution
// app.delete('/api/problems/:id/solutions/:solutionId', (req, res) => {
//     db.Solution.findByIdAndDelete(req.params.id, (err, deletedSolution) => {
//         if (err) {
//             return res.status(400).json({ status: 400, error: 'please try agin' })
//         }
//         res.json(deletedSolution)
//     })
// })

app.delete("/api/problems/:id/solutions/:solutionId", (req, res) => {
  // Find Problem By ID
  db.Problem.findById(req.params.id, (err, foundProblem) => {
    if (err) {
      return res
        .status(400)
        .json({ status: 400, error: "Something went wrong, please try again" })
    }

    // Find Solution By ID
    const solutionToDelete = foundProblem.solutions.id(req.params.solutionId)

    if (!solutionToDelete) {
      return res.status(400).json({ status: 400, error: "Could not find post" })
    }

    // Delete solution from the problem Record
    solutionToDelete.remove()

    // Save Modified Problem
    foundProblem.save((err, savedProblem) => {
      if (err) {
        return res.status(400).json({
          status: 400,
          error: "Something went wrong, please try again",
        })
      }

      res.json(savedProblem)
    })
  })
})

// ---------------------------------associated paths

//Creates solution index for specific problem
app.put("/api/problems/:id/solutions/:solutionId", (req, res) => {
  // db.Solution.create(req.body, (err, newSolution) => {
  //     if (err) {
  //         return res.status(400).json({ status: 400, error: 'Something went wrong, please try again' })
  //     }

  db.Solution.findById(req.params.solutionId, (err, foundSolutions) => {
    if (err) {
      console.log(err)
    }
    console.log("foundSolutions:", foundSolutions)

    // Find problem to associate solutions with
    db.Problem.findById(req.params.id, (err, foundProblem) => {
      console.log("db.problem: ", foundProblem)
      if (err) {
        return res.status(400).json({ status: 400, error: "finding problem" })
      }
      // add solutions to problem
      //foundProblem.solutions = foundSolutions
      foundProblem.solutions.push(foundSolutions)
      console.log("found problem solution", foundProblem.solutions)
      //Save modified problem
      foundProblem.save((err, savedProblem) => {
        if (err) {
          return res.status(400).json({ status: 400, error: "saving problem" })
        }
        res.json(foundProblem)
      })
    })
  })
})

// Problem/:id/solution
//POST:create route for solution form
// PUT: update route edit button
//DELETE:

// API endpoints: [
//     { method: "GET", path: "/api", description: "homepage"},
// //TODO { method: "GET", path: "/api/profile", description: "profile"},
//     { method: "GET", path: "/api/problems", description: "problem index" },
//     { method: "GET", path: "/api/problems/:id", description: "selected problem card" },
//     { method: "GET", path: "/api/problems/:id/solutions", description: "index of solutions" },
//     { method: "PUT", path: "/api/problems/:id/solution/:id", description: "view one solution card },
//     { method: "POST", path: "/api/problems/:id/solution/:id", description: "Create a new solution" },
//     { method: "DELETE", path: "/api/problems/:id/solution/:id", description: "Delete a solution" },
//    //TODO
//    //path for login modal
//    //sign up modal
//    //Serve the profile page and populate it with information from the database.
//   ]

// ---------------------- START SERVER
app.listen(PORT, () => console.log("Server is running at localhost: 4000"))
