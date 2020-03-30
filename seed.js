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
    properties: {
      name: "Back pain",
      description:
        "Physical discomfort occurring anywhere on the spine or back, ranging from mild to disabling.",
      image: "../images/fatigue.jpg",
      solutions: [],
    },
    solutionNames: ["Meditation", "Stretching"],
  },
  {
    properties: {
      name: "Anxiety",
      description:
        "A mental health disorder characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with ones daily activities.",
      image: "../images/anxiety.png",
      solutions: [],
    },
    solutionNames: ["Meditation", "Energy purification"],
  },
  {
    properties: {
      name: "Depression",
      description:
        "A mental health disorder characterized by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life.",
      image: "../images/depression.png",
      solutions: [],
    },
    solutionNames: ["Crystal", "Stretching"],
  },
  {
    properties: {
      name: "Stress",
      description: "Stress is a feeling of emotional or physical tension.",
      image: "../images/stress.jpg",
      solutions: [],
    },
    solutionNames: ["Meditation", "Crystal"],
  },
]

const solutions = [
  {
    name: "Crystal",
    description: "This white crystal is considered a “master healer.",
    image: "../images/crystals.jpg",
    link: "https://www.energymuse.com/crystal-shop",
  },
  {
    name: "Stretching",
    description: "keeps the muscles flexible, strong, and healthy ",
    image: "../images/stretch.jpg",
    link: "https://www.youtube.com/watch?v=Ji9vKgfWK88",
  },
  {
    name: "Meditation",
    description: "It's about training in awareness",
    image: "../images/meditation.jpg",
    link: "https://wakingup.com/",
  },
  {
    name: "Energy purification",
    description: "Cleansing the bad mojo out",
    image: "../images/energy.jpg",
    link:
      "https://www.energymuse.com/blog/how-to-remove-negative-energy-from-your-home",
  },
]

db.Problem.deleteMany({})
  .then((_result) => db.Solution.deleteMany())
  .then(() => db.Solution.create(solutions))
  .then(() =>
    // return a Promise.all
    Promise.all(
      // takes an array of promises
      // callback of map returns a promise
      problems.map((problem) =>
        db.Solution.find({ name: problem.solutionNames }).then((results) => {
          problem.properties.solutions = results
          return db.Problem.create(problem.properties)
        })
      )
    )
  )
  .then((createdProblems) => {
    console.log(createdProblems)
    process.exit()
  })
