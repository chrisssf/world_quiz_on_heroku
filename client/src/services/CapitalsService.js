// const baseURL = 'http://localhost:3000/api/capitals'
// const baseURL = 'api/capitals/'
const baseURL = 'api/'


export default {
  getCapitals(path) {
    return fetch(baseURL + path)
    .then(res => res.json())
    // .then(questions => {
    //   console.log(questions)
    //   const randomQuestions = []
    //   while (randomQuestions.length < 10 ) {
    //     const randomIndex = Math.floor(Math.random() * (questions.length));
    //     const randomQuestion = questions[randomIndex]
    //     const results = randomQuestions.filter(question => {
    //       console.log("random", randomQuestion.Answer)
    //       console.log("this one", question.Answer)
    //       return randomQuestion.Answer === question.Answer
    //     })
    //     if (results.length === 0){
    //       randomQuestions.push(randomQuestion)
    //     }
    //   }
    //   console.log(randomQuestions)
    //   return randomQuestions
    // })
  }
}
