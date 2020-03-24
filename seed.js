const db = require('./models')

const problems = [
    {
        name: 'Fatigue',
        description: 'Feeling overtired, with low energy and a strong desire to sleep that interferes with normal daily activities.',
        image: 'https://placebear.com/200/300'
    },
    {
        name: 'Back pain',
        description: 'Physical discomfort occurring anywhere on the spine or back, ranging from mild to disabling.',
        image: 'https://placebear.com/200/300'
    },
    {
        name: 'Anxiety',
        description: 'A mental health disorder characterized by feelings of worry, anxiety, or fear that are strong enough to interfere with ones daily activities.',
        image: 'https://placebear.com/200/300'
    }, 
    {
        name: 'Depression',
        description: 'A mental health disorder characterized by persistently depressed mood or loss of interest in activities, causing significant impairment in daily life.',
        image: 'https://placebear.com/200/300'
    },
    {
        name: 'Stress',
        description: 'Stress is a feeling of emotional or physical tension.',
        image: 'https://placebear.com/200/300'
    }, 
]

// Delete All Problems
console.log('Deleting all problems...')

db.Problem.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err)
    process.exit()
  }


  console.log(`Successfully deleted ${result.deletedCount} problems.`)

  // Create New Problems
  console.log('Creating new problems...')

  db.Problem.create(problems, (err, newProblems) => {
    if (err) {
      console.log(err)
      process.exit()
    }

    console.log(`Successfully created ${newProblems.length} problems.`)
    console.log(newProblems)
    process.exit()
  })
})