const db = require("./models")

const problems = [
  {
    properties: {
      name: "Fatigue",
      description:
        "Feeling overtired, with low energy and a strong desire to sleep that interferes with normal daily activities.",
      image: "../images/brainPain.jpeg",
      solutions: [],
    },
    solutionNames: ["Energy purification", "Crystal"],
  },
  {
    name: "Back pain",
    description:
      "Physical discomfort occurring anywhere on the spine or back, ranging from mild to disabling.",
    image: "../images/fatigue.jpg",
    solutions: [],
  },
  {
    name: "Anxiety",
    description:
      "A mental health disorder characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with ones daily activities.",
    image: "../images/anxiety.png",
    solutions: [],
  },
  {
    name: "Depression",
    description:
      "A mental health disorder characterized by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life.",
    image: "../images/depression.png",
    solutions: [],
  },
  {
    name: "Stress",
    description: "Stress is a feeling of emotional or physical tension.",
    image: "../images/stress.jpg",
    solutions: [],
  },
]

const solutions = [
  {
    id: "1",
    name: "Crystal",
    description: "This white crystal is considered a “master healer.",
    image: "https://picsum.photos/200/300",
    link: "https://www.energymuse.com/crystal-shop",
  },
  {
    // id: "2",
    name: "Stretching",
    description: "keeps the muscles flexible, strong, and healthy ",
    image: "https://picsum.photos/200/300",
    link: "https://www.youtube.com/watch?v=Ji9vKgfWK88",
  },
  {
    // id: "3",
    name: "Meditation",
    description: "It's about training in awareness",
    image: "https://picsum.photos/200/300",
    link: "https://wakingup.com/",
  },
  {
    name: "Energy purification",
    description: "Cleansing the bad mojo out",
    image: "https://picsum.photos/200/300",
    link:
      "https://www.energymuse.com/blog/how-to-remove-negative-energy-from-your-home",
  },
]

// console.log("Deleting all problems...")
// db.Problem.deleteMany({})
//   .then((results) => {
//     console.log(`Successfully deleted ${results.deletedCount} problems.`)
//     return db.Problem.create(problems)
//   })
//   .then((newProblems) => {
//     console.log(`Successfully created ${newProblems.length} problems.`)
//     return db.Solution.deleteMany({})
//   })
//   .then((_results) => {
//     console.log("Deleting all solutions...")
//     return db.Solution.create(solutions)
//   })
//   .then((newSolutions) => {
//     console.log(`Successfully created ${newSolutions.length} solutions.`)
//     process.exit()
//   })
//   .catch((err) => console.log(err))

// {
//   properties: {
//     name: "Fatigue",
//     description:
//       "Feeling overtired, with low energy and a strong desire to sleep that interferes with normal daily activities.",
//     image: "../images/brainPain.jpeg",
//     solutions: [],
//   },
//   solutionNames: ["Energy purification", "Crystal"],
// },

const exampleProblem = problems[0]
db.Problem.deleteMany({})
  .then((_result) => db.Solution.deleteMany())
  .then(() => db.Solution.create(solutions))
  .then(() => db.Solution.find({ name: exampleProblem.solutionNames }))
  .then((results) => {
    exampleProblem.properties.solutions = results
    return db.Problem.create(exampleProblem.properties)
  })
  .then((result) => console.log(result))

// //problem 1
// //find sol by filter name
// //find by id
// //insert into proclem solution array
// //save
