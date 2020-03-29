const db = require("./models")

const problems = [
  {
    name: "Fatigue",
    description:
      "Feeling overtired, with low energy and a strong desire to sleep that interferes with normal daily activities.",
    image: "../images/brainPain.jpeg",
    solutions: [],
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

// Delete All Problems
console.log("Deleting all problems...")
db.Problem.deleteMany({})
  .then((results) => {
    console.log(`Successfully deleted ${results.deletedCount} problems.`)
    return db.Problem.create(problems)
  })
  .then((newProblems) => {
    console.log(`Successfully created ${newProblems.length} problems.`)
    return db.Solution.deleteMany({})
  })
  .then((_results) => {
    console.log("Deleting all solutions...")
    return db.Solution.create(solutions)
  })
  .then((newSolutions) => {
    console.log(`Successfully created ${newSolutions.length} solutions.`)
    process.exit()
  })
  .catch((err) => console.log(err))

// //problem 1
// //find by id
// //find sol by filter name
// //insert into proclem solution array
// //save
