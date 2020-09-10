<template>
  <div id="app">
    <a href="https://chris-fraser-world-quiz.herokuapp.com/">
      <h1 class="title">

        <span id="W">W</span>
        <span id="O">O</span>
        <span id="R">R</span>
        <span id="L">L</span>
        <span id="D">D</span>

        <span id="M">M</span>
        <span id="A">A</span>
        <span id="P">P</span>
        <span id="map-logo"><i class="fas fa-globe-americas"></i></span>
      </h1>
    </a>
    <div class="grid-container">
      <div class="col-1">
        <map-view class="map" v-if="this.loaded" :countriesForMap='countriesForMap' :key="componentKey"/>
      </div>
      <div class="col-2">
        <selection-buttons class="quiz-choices"/>
        <questions class="questions" v-if="this.correctAnswer" :selectedQuiz='selectedQuiz' :question='correctAnswer' :easyQuestion='question' />
        <answers class="answers" v-if="this.options" :selectedQuiz='selectedQuiz' :correctAnswer='correctAnswer' :randomCountries='randomCountries' :questionCounter='questionCounter' :easyOptions='options' :easyAnswer='answer' />
        <country-info class="map-info-box" v-if='mapCountryInfo !== null && options === null' :mapCountryInfo='mapCountryInfo' />
      </div>
    </div>
  </div>
</template>

<script>
import MapView from './components/MapView.vue'
import CountryInfo from './components/CountryInfo.vue'
import SelectionButtons from './components/SelectionButtons.vue'
import Questions from './components/Questions.vue'
import Answers from './components/Answer.vue'
import {eventBus} from './main.js'
// import CountryService from './services/CountriesService.js'
// import CapitalsService from './services/CapitalsService.js'
// import FlagsService from './services/FlagsService.js' 
import apiFetchService from './services/apiFetchService.js'



export default {
  name: 'app',
  components: {
    "map-view": MapView,
    "country-info": CountryInfo,
    "selection-buttons": SelectionButtons,
    "questions": Questions,
    "answers": Answers
  },
  data() {
    return {
      question: null,
      options: null,
      correctAnswer: null,
      mapCountryInfo: null,
      mapDataArray: [],
      allCountriesForMap: [],
      loaded: null,
      componentKey: 0,
      questionCounter: 0,
      selectedQuiz: null,
      randomCountries: [],
      currentEasyQuizQuestions: [],
    }
  },
  computed: {
    countriesForMap: function() {

      if (this.options) {
        return this.options
      } else {
        return this.allCountriesForMap
      }
    }
  },
  methods: {
      fetchEasyQuestions(quiz) {
      apiFetchService.getApiData(quiz)
        .then(questions => {
          const randomQuestions = []
          while (randomQuestions.length < 10 ) {
            const randomIndex = Math.floor(Math.random() * (questions.length));
            const randomQuestion = questions[randomIndex]
            const results = randomQuestions.filter(question => {
              return randomQuestion.Answer === question.Answer
            })
            if (results.length === 0){
              randomQuestions.push(randomQuestion)
            }
          }
          this.currentEasyQuizQuestions = randomQuestions
          this.nextQuestion(0)
        })
    },

    nextQuestion(questionNumber) {
      this.options = this.currentEasyQuizQuestions[questionNumber].Options
      this.question = this.currentEasyQuizQuestions[questionNumber].Question
      this.correctAnswer = this.currentEasyQuizQuestions[questionNumber].Answer
      this.componentKey += 1
    },

    getHardQuestions(quiz) {
      const randomCountries = []
      while (randomCountries.length < 4 ) {
        const randomIndex = Math.floor(Math.random() * (this.mapDataArray.length));
        const randomCountry = this.mapDataArray[randomIndex]
        if (randomCountry.area >= 200000 && randomCountries.includes(randomCountry) === false && randomCountry.name !== "Antarctica") {
          randomCountries.push(randomCountry)
        }
      }
      this.randomCountries = randomCountries
      if(quiz === "countries"){
        this.options = randomCountries.map((country, index) => [{v: country.alpha2Code, f:"?"}, {v:index, f:""}])
      } else {
        this.options = randomCountries.map((country, index) => [{v: country.alpha2Code, f: country.name}, {v:index, f:""}])
      }
      const randomAnswerIndex = Math.floor(Math.random() * 4);
      this.correctAnswer = randomCountries[randomAnswerIndex]
      this.componentKey += 1
    },
},

  mounted() {
    fetch("https://restcountries.eu/rest/v2/all")
    .then(res => res.json())
    .then(countries => this.mapDataArray = countries)
    .then(() => {
      this.mapDataArray.forEach((country, index)=> this.allCountriesForMap.push([{v: country.alpha2Code, f: country.name}, {v:index, f:""}]))
    })
    .then(() => {
        this.loaded = true
    })

    eventBus.$on('hard-country-quiz-selected', () => {
      this.correctAnswer = null
      this.selectedQuiz = "hardCountries"
      this.questionCounter = 0
      this.getHardQuestions("countries")
    })

    eventBus.$on('easy-country-quiz-selected', () =>{
      this.correctAnswer = null
      this.selectedQuiz = "easyCountries"
      this.questionCounter = 1
      this.fetchEasyQuestions("countries")

    })

    eventBus.$on('hard-capital-quiz-selected', () => {
      this.correctAnswer = null
      this.selectedQuiz = "hardCapitals"
      this.questionCounter = 0
      this.getHardQuestions("capitals")

    })

    eventBus.$on('easy-capital-quiz-selected', () => {
      this.correctAnswer = null
      this.selectedQuiz = "easyCapitals"
      this.questionCounter = 1
      this.fetchEasyQuestions("capitals")

    })

    eventBus.$on('hard-flag-quiz-selected', () =>{ 
      this.correctAnswer = null
      this.options = null
      this.selectedQuiz = "hardFlags"
      this.questionCounter = 0
      this.getHardQuestions("flags")

    })

 
    eventBus.$on('easy-flag-quiz-selected', () => {
      this.correctAnswer = null
      this.options = null
      this.selectedQuiz = "easyFlags"
      this.questionCounter = 1
      this.fetchEasyQuestions("flags")

    })

    eventBus.$on('select-more-info', countryCode => {
      fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(countries => this.mapCountryInfo = countries.find(country => country.alpha2Code === countryCode))
    })

    eventBus.$on('next-question', (selectedQuiz) => {
      if (selectedQuiz === "hardCountries"){
        this.getHardQuestions("countries")
      }
      else if (selectedQuiz === "hardCapitals"){
        this.getHardQuestions("capitals")

      }
      else if (selectedQuiz === "hardFlags"){ 
        this.getHardQuestions("flags")

      }
      else if (selectedQuiz === "easyCountries"){
        this.nextQuestion(this.questionCounter)
      }
      else if (selectedQuiz === "easyCapitals"){
        this.nextQuestion(this.questionCounter)
      }
      else if (selectedQuiz === "easyFlags"){ 
        this.nextQuestion(this.questionCounter)
      }
      this.questionCounter += 1;
    })
  }
}

</script>

<style>
body {
  background-color: #F8F8ff;
  color: #303030;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* color: #2c3e50; */

}

.grid-container {
  display: grid;
  grid-template-columns: 7fr 3fr;
}

@media (max-width: 1050px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}

.col-2{
  text-align: center;
  justify-content: cetnter;
}

.map {
  position: relative;
  /* display: inline; */
  /* width: 60%; */
}

.map-info-box{
  margin: auto;
  margin-top: 10px;
}

/* .map-info-box{
  position: absolute;
  left: 80px;
  bottom: 70px;
} */

/* .quiz-choices {
  display: inline; */
  /* width: 40%;
} */

.title {
  text-align: center;
  /* padding-left: 30px; */
  font-size: 3em;
}

.questions{
  margin-top: 50px;
}

.answers {
  margin-top: 30px;
}

#W{
  color: #57cfff;
  text-shadow: 1px 0 0;
}

#O{
color: #ff2921;
}

#R{
color: #ebc634;
}

#L{
color: #51ff1c;
}

#D{
color: #57cfff;
margin-right: 10px;
}

#M{
color: #ff2921;
margin-left: 10px;
}

#A{
color: #ebc634;
}

#P{
color: #51ff1c;
}

#map-logo {
  padding-left: 20px;
  color: #57cfff;
}

#app > a {
  text-decoration: none;
}

</style>
