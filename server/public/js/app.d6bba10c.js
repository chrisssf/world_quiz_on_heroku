(function(t){function e(e){for(var s,o,r=e[0],c=e[1],u=e[2],h=0,d=[];h<r.length;h++)o=r[h],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);l&&l(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],s=!0,r=1;r<n.length;r++){var c=n[r];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var s={},a={app:0},i=[];function o(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=s,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(n,s,function(e){return t[e]}.bind(null,s));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"02a6":function(t,e,n){},"034f":function(t,e,n){"use strict";var s=n("85ec"),a=n.n(s);a.a},"1c23":function(t,e,n){"use strict";var s=n("02a6"),a=n.n(s);a.a},2485:function(t,e,n){"use strict";var s=n("8b5c"),a=n.n(s);a.a},"45ca":function(t,e,n){"use strict";var s=n("b5ee"),a=n.n(s);a.a},"4ef3":function(t,e,n){},"50b2":function(t,e,n){"use strict";var s=n("91ee"),a=n.n(s);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("div",{staticClass:"grid-container"},[n("div",{staticClass:"col-1"},[this.loaded?n("map-view",{key:t.componentKey,staticClass:"map",attrs:{countriesForMap:t.countriesForMap}}):t._e()],1),n("div",{staticClass:"col-2"},[n("selection-buttons",{staticClass:"quiz-choices"}),this.correctAnswer?n("questions",{staticClass:"questions",attrs:{selectedQuiz:t.selectedQuiz,question:t.correctAnswer,easyQuestion:t.question}}):t._e(),this.options?n("answers",{staticClass:"answers",attrs:{selectedQuiz:t.selectedQuiz,correctAnswer:t.correctAnswer,randomCountries:t.randomCountries,questionCounter:t.questionCounter,easyOptions:t.options,easyAnswer:t.answer}}):t._e(),null!==t.mapCountryInfo&&null===t.options?n("country-info",{staticClass:"map-info-box",attrs:{mapCountryInfo:t.mapCountryInfo}}):t._e()],1)])])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"https://chris-fraser-world-quiz.herokuapp.com/"}},[n("h1",{staticClass:"title"},[n("span",{attrs:{id:"W"}},[t._v("W")]),n("span",{attrs:{id:"O"}},[t._v("O")]),n("span",{attrs:{id:"R"}},[t._v("R")]),n("span",{attrs:{id:"L"}},[t._v("L")]),n("span",{attrs:{id:"D"}},[t._v("D")]),n("span",{attrs:{id:"M"}},[t._v("M")]),n("span",{attrs:{id:"A"}},[t._v("A")]),n("span",{attrs:{id:"P"}},[t._v("P")]),n("span",{attrs:{id:"map-logo"}},[n("i",{staticClass:"fas fa-globe-americas"})])])])}],o=(n("7db0"),n("4160"),n("caad"),n("d81d"),n("b0c0"),n("d3b7"),n("159b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"regions_div"}})}),r=[],c="AIzaSyCwa71ymq1yVfPG--aVyM0CaJdglL3Z7LE",u=c,l={name:"map-view",data:function(){return{}},props:["countriesForMap"],mounted:function(){google.charts.load("current",{packages:["geochart"],mapsApiKey:u}),google.charts.setOnLoadCallback(e);var t=this.countriesForMap;function e(){var e=google.visualization.arrayToDataTable(t),n=function(){return t.length<10?{colors:["red","green","blue","yellow"]}:{colors:["green","darkgreen"]}},s=n(),a={backgroundColor:"#81d4fa",colorAxis:s,legend:"none"},i=new google.visualization.GeoChart(document.getElementById("regions_div"));google.visualization.events.addListener(i,"select",(function(){var t=i.getSelection();t.length>0&&B.$emit("select-more-info",e.getValue(t[0].row,0))})),i.draw(e,a)}t.unshift(["Country",""])}},h=l,d=(n("b1e2"),n("2877")),f=Object(d["a"])(h,o,r,!1,null,"98e9d15a",null),p=f.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-container"},[n("ul",[n("li",{attrs:{id:"country-title"}},[t._v(t._s(t.mapCountryInfo.name))]),n("li",[t._v("Capital: "+t._s(t.mapCountryInfo.capital))]),n("li",[t._v("Population: "+t._s(t.mapCountryInfo.population))]),n("li",[t._v("Region: "+t._s(t.mapCountryInfo.subregion))]),n("li",[t._v("Area: "+t._s(t.mapCountryInfo.area)+"km²")]),n("li",[n("img",{staticClass:"small-flag",attrs:{src:t.mapCountryInfo.flag,alt:"NoneApplicable"}})])])])},C=[],m={name:"countryInfo",props:["mapCountryInfo"]},g=m,v=(n("45ca"),Object(d["a"])(g,y,C,!1,null,"82790c30",null)),b=v.exports,_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{key:t.key,staticClass:"button-choices"},[t.quizCurrentlySelected?n("p",[t._v("Click a country on the map to find out some more information!")]):t._e(),n("p",[t._v("Up for a challenge?")]),n("p",{attrs:{id:"underline"}},[t._v("Choose a quiz below:")]),n("button",{staticClass:"btn success",attrs:{type:"button",name:"country-select-button"},on:{click:t.handleCountryClick}},[t._v("Countries")]),n("button",{staticClass:"btn danger",attrs:{type:"button",name:"capital-select-button"},on:{click:t.handleCapitalClick}},[t._v("Capitals")]),n("button",{staticClass:"btn orange",attrs:{type:"button",name:"flag-select-button"},on:{click:t.handleFlagClick}},[t._v("Flags")]),n("br"),"country"===this.clickedQuiz?n("button",{staticClass:"btn success difficulty-button",attrs:{type:"button",name:"easy-country-button"},on:{click:t.handleEasyCountryClick}},[t._v("Easy")]):t._e(),"country"===this.clickedQuiz?n("button",{staticClass:"btn success difficulty-button",attrs:{type:"button",name:"hard-country-button"},on:{click:t.handleHardCountryClick}},[t._v("Hard")]):t._e(),"capital"===this.clickedQuiz?n("button",{staticClass:"btn danger difficulty-button",attrs:{type:"button",name:"easy-capital-button"},on:{click:t.handleEasyCapitalClick}},[t._v("Easy")]):t._e(),"capital"===this.clickedQuiz?n("button",{staticClass:"btn danger difficulty-button",attrs:{type:"button",name:"hard-capital-button"},on:{click:t.handleHardCapitalClick}},[t._v("Hard")]):t._e(),"flag"===this.clickedQuiz?n("button",{staticClass:"btn orange difficulty-button",attrs:{type:"button",name:"easy-flag-button"},on:{click:t.handleEasyFlagClick}},[t._v("Easy")]):t._e(),"flag"===this.clickedQuiz?n("button",{staticClass:"btn orange difficulty-button",attrs:{type:"button",name:"hard-flag-button"},on:{click:t.handleHardFlagClick}},[t._v("Hard")]):t._e()])},z=[],q={name:"select-buttons",data:function(){return{quizCurrentlySelected:!0,key:0,clickedQuiz:null}},methods:{handleCountryClick:function(){this.clickedQuiz="country",this.key+=1},handleCapitalClick:function(){this.clickedQuiz="capital",this.key+=1},handleFlagClick:function(){this.clickedQuiz="flag",this.key+=1},handleEasyCountryClick:function(){this.clickedQuiz=null,this.key+=1,B.$emit("easy-country-quiz-selected"),this.quizCurrentlySelected=!1},handleHardCountryClick:function(){this.clickedQuiz=null,this.key+=1,B.$emit("hard-country-quiz-selected"),this.quizCurrentlySelected=!1},handleEasyCapitalClick:function(){this.clickedQuiz=null,this.key+=1,B.$emit("easy-capital-quiz-selected"),this.quizCurrentlySelected=!1},handleHardCapitalClick:function(){this.clickedQuiz=null,this.key+=1,B.$emit("hard-capital-quiz-selected"),this.quizCurrentlySelected=!1},handleEasyFlagClick:function(){this.clickedQuiz=null,this.key+=1,B.$emit("easy-flag-quiz-selected"),this.quizCurrentlySelected=!1},handleHardFlagClick:function(){this.clickedQuiz=null,this.key+=1,B.$emit("hard-flag-quiz-selected"),this.quizCurrentlySelected=!1}}},w=q,k=(n("50b2"),Object(d["a"])(w,_,z,!1,null,"49bdea82",null)),A=k.exports,Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"question-container"},["easyCountries"===this.selectedQuiz?n("h2",[t._v(" "+t._s(this.easyQuestion)+" ")]):t._e(),"hardCountries"===this.selectedQuiz?n("h2",[t._v("Which country on the map is "+t._s(t.question.name)+"?")]):t._e(),"easyCapitals"===this.selectedQuiz?n("h2",[t._v(" "+t._s(this.easyQuestion)+" ")]):t._e(),"hardCapitals"===this.selectedQuiz?n("h2",[t._v("Which country's capital is "+t._s(t.question.capital)+"?")]):t._e(),"hardFlags"===this.selectedQuiz?n("h2",{staticClass:"flag-question"},[t._v("Which country's flag is "),n("br"),t._v(" "),n("img",{staticClass:"small-flag",attrs:{src:t.question.flag,alt:"NoneApplicable"}})]):t._e(),"easyFlags"===this.selectedQuiz?n("h2",{staticClass:"flag-question"},[t._v("Which country's flag is "),n("br"),t._v(" "),n("img",{staticClass:"small-flag",attrs:{src:this.easyQuestion,alt:"NoneApplicable"}})]):t._e(),n("h2",{staticClass:"question"},[t._v("Click the country you think it is")])])},x=[],$={name:"questions",data:function(){return{quizType:null}},props:["question","selectedQuiz","easyQuestion"],mounted:function(){this.console.log("easyQuestion")}},F=$,M=(n("2485"),Object(d["a"])(F,Q,x,!1,null,"adc34648",null)),S=M.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.selectedAnswer?n("div",{staticClass:"answer-container"},[n("p",[t._v("You selected "+t._s(t.selectedAnswer))]),"h"===this.selectedQuiz.slice(0,1)?n("p",[this.selectedAnswer===this.correctAnswer.name?n("i",{staticClass:"far fa-thumbs-up fa-2x"}):t._e(),this.selectedAnswer!==this.correctAnswer.name?n("i",{staticClass:"far fa-thumbs-down fa-2x"}):t._e()]):t._e(),"e"===this.selectedQuiz.slice(0,1)?n("p",[this.selectedAnswer===this.correctAnswer?n("i",{staticClass:"far fa-thumbs-up fa-2x"}):t._e(),this.selectedAnswer!==this.correctAnswer?n("i",{staticClass:"far fa-thumbs-down fa-2x"}):t._e()]):t._e(),"h"===this.selectedQuiz.slice(0,1)?n("div",[t.questionCounter<9?n("button",{staticClass:"btn next",attrs:{type:"button",name:"next-question"},on:{click:t.handleNextQuestion}},[t._v("Next")]):t._e(),9===t.questionCounter?n("div",[n("p",[t._v("Well done on completing the quiz! Your score is "+t._s(this.quizScore))]),n("a",{staticClass:"btn next",attrs:{href:"http://localhost:8080"}},[t._v("Return home")])]):t._e()]):t._e(),"e"===this.selectedQuiz.slice(0,1)?n("div",[t.questionCounter<10?n("button",{staticClass:"btn next",attrs:{type:"button",name:"next-question"},on:{click:t.handleNextQuestion}},[t._v("Next")]):t._e(),10===t.questionCounter?n("div",[n("p",[t._v("Well done on completing the quiz! Your score is "+t._s(this.quizScore))]),n("a",{staticClass:"btn next",attrs:{href:"http://localhost:8080"}},[t._v("Return home")])]):t._e()]):t._e()]):t._e()},D=[],j=(n("fb6a"),{name:"answer",data:function(){return{selectedAnswer:null,quizScore:0}},watch:{selectedAnswer:function(){this.checkAnswer()}},props:["correctAnswer","selectedQuiz","questionCounter","randomCountries"],methods:{checkAnswer:function(){return"h"===this.selectedQuiz.slice(0,1)?this.selectedAnswer===this.correctAnswer.name&&null!=this.selectedAnswer?(this.quizScore+=1,"Correct!"):"Incorrect":"e"===this.selectedQuiz.slice(0,1)?this.selectedAnswer===this.correctAnswer&&null!=this.selectedAnswer?(this.quizScore+=1,"Correct!"):"Incorrect":void 0},handleNextQuestion:function(){this.selectedAnswer=null,B.$emit("next-question",this.selectedQuiz)}},mounted:function(){var t=this;B.$on("select-more-info",(function(e){if("h"===t.selectedQuiz.slice(0,1)){var n=t.randomCountries.find((function(t){return t.alpha2Code===e}));t.selectedAnswer=n.name}else t.selectedAnswer=e})),B.$on("easy-country-quiz-selected",(function(){t.selectedAnswer=null,t.quizScore=0})),B.$on("hard-country-quiz-selected",(function(){t.selectedAnswer=null,t.quizScore=0})),B.$on("easy-capital-quiz-selected",(function(){t.selectedAnswer=null,t.quizScore=0})),B.$on("hard-capital-quiz-selected",(function(){t.selectedAnswer=null,t.quizScore=0})),B.$on("easy-flag-quiz-selected",(function(){t.selectedAnswer=null,t.quizScore=0})),B.$on("hard-flag-quiz-selected",(function(){t.selectedAnswer=null,t.quizScore=0}))}}),E=j,I=(n("1c23"),Object(d["a"])(E,O,D,!1,null,"5a25b544",null)),R=I.exports,P="api/countries/",H={getCountries:function(){return fetch(P).then((function(t){return t.json()}))}},K="api/capitals/",N={getCapitals:function(){return fetch(K).then((function(t){return t.json()}))}},W="api/flags/",L={getFlags:function(){return fetch(W).then((function(t){return t.json()}))}},T={name:"app",components:{"map-view":p,"country-info":b,"selection-buttons":A,questions:S,answers:R},data:function(){return{question:null,options:null,correctAnswer:null,mapCountryInfo:null,mapDataArray:[],allCountriesForMap:[],loaded:null,componentKey:0,questionCounter:0,selectedQuiz:null,randomCountries:[]}},computed:{countriesForMap:function(){return this.options?this.options:this.allCountriesForMap}},methods:{fetchCountryData:function(t){var e=this;H.getCountries().then((function(n){return e.options=n[t].Options,console.log("options",e.options),n})).then((function(n){return e.question=n[t].Question,console.log("question",e.question),n})).then((function(n){return e.correctAnswer=n[t].Answer})).then((function(){return e.componentKey+=1}))},fetchCapitalData:function(t){var e=this;N.getCapitals().then((function(n){return e.options=n[t].Options,n})).then((function(n){return e.question=n[t].Question,n})).then((function(n){return e.correctAnswer=n[t].Answer})).then((function(){return e.componentKey+=1}))},fetchFlagData:function(t){var e=this;L.getFlags().then((function(n){return e.options=n[t].Options,console.log("options",e.options),n})).then((function(n){return e.question=n[t].Question,console.log("question",e.question),n})).then((function(n){return e.correctAnswer=n[t].Answer})).then((function(){return e.componentKey+=1}))},getRandomCountries:function(){var t=[];while(t.length<4){var e=Math.floor(Math.random()*(this.mapDataArray.length-1)),n=this.mapDataArray[e];console.log(n.area,e,n.name),n.area>=2e5&&!1===t.includes(n)&&"Antarctica"!==n.name&&t.push(n)}console.log(t),this.randomCountries=t,this.options=t.map((function(t,e){return[{v:t.alpha2Code,f:"?"},{v:e,f:""}]}));var s=Math.floor(4*Math.random());this.correctAnswer=t[s],this.componentKey+=1},getRandomCapitals:function(){var t=[];while(t.length<4){var e=Math.floor(Math.random()*(this.mapDataArray.length-1)),n=this.mapDataArray[e];console.log(n.area,e,n.capital),n.area>=2e5&&!1===t.includes(n)&&"Antarctica"!==n.name&&t.push(n)}console.log(t),this.randomCountries=t,this.options=t.map((function(t,e){return[{v:t.alpha2Code,f:t.name},{v:e,f:""}]}));var s=Math.floor(4*Math.random());this.correctAnswer=t[s],this.componentKey+=1},getRandomFlags:function(){var t=[];while(t.length<4){var e=Math.floor(Math.random()*(this.mapDataArray.length-1)),n=this.mapDataArray[e];n.area>=2e5&&!1===t.includes(n)&&"Antarctica"!==n.name&&t.push(n)}this.randomCountries=t,this.options=t.map((function(t,e){return[{v:t.alpha2Code,f:t.name},{v:e,f:""}]}));var s=Math.floor(4*Math.random());this.correctAnswer=t[s],this.componentKey+=1}},mounted:function(){var t=this;fetch("https://restcountries.eu/rest/v2/all").then((function(t){return t.json()})).then((function(e){return t.mapDataArray=e})).then((function(){t.mapDataArray.forEach((function(e,n){return t.allCountriesForMap.push([{v:e.alpha2Code,f:e.name},{v:n,f:""}])}))})).then((function(){t.loaded=!0})),B.$on("hard-country-quiz-selected",(function(){t.correctAnswer=null,t.selectedQuiz="hardCountries",t.questionCounter=0,t.getRandomCountries()})),B.$on("easy-country-quiz-selected",(function(){t.correctAnswer=null,t.selectedQuiz="easyCountries",t.questionCounter=1,t.fetchCountryData(0)})),B.$on("hard-capital-quiz-selected",(function(){t.correctAnswer=null,t.selectedQuiz="hardCapitals",t.questionCounter=0,t.getRandomCapitals()})),B.$on("easy-capital-quiz-selected",(function(){t.correctAnswer=null,t.selectedQuiz="easyCapitals",t.questionCounter=1,t.fetchCapitalData(0)})),B.$on("hard-flag-quiz-selected",(function(){t.correctAnswer=null,t.options=null,t.selectedQuiz="hardFlags",t.questionCounter=0,t.getRandomFlags()})),B.$on("easy-flag-quiz-selected",(function(){t.correctAnswer=null,t.options=null,t.selectedQuiz="easyFlags",t.questionCounter=1,t.fetchFlagData(0)})),B.$on("select-more-info",(function(e){fetch("https://restcountries.eu/rest/v2/all").then((function(t){return t.json()})).then((function(n){return t.mapCountryInfo=n.find((function(t){return t.alpha2Code===e}))}))})),B.$on("next-question",(function(e){"hardCountries"===e?t.getRandomCountries():"hardCapitals"===e?t.getRandomCapitals():"hardFlags"===e?t.getRandomFlags():"easyCountries"===e?t.fetchCountryData(t.questionCounter):"easyCapitals"===e?t.fetchCapitalData(t.questionCounter):"easyFlags"===e&&t.fetchFlagData(t.questionCounter),t.questionCounter+=1}))}},J=T,V=(n("034f"),Object(d["a"])(J,a,i,!1,null,null,null)),Y=V.exports;n.d(e,"eventBus",(function(){return B}));var B=new s["a"];s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(Y)}}).$mount("#app")},"85ec":function(t,e,n){},"8b5c":function(t,e,n){},"91ee":function(t,e,n){},b1e2:function(t,e,n){"use strict";var s=n("4ef3"),a=n.n(s);a.a},b5ee:function(t,e,n){}});
//# sourceMappingURL=app.d6bba10c.js.map