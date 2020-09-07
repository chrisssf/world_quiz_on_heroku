const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');

app.use(cors())
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');


// original code for connecting to local DB!!!!!!!
// MongoClient.connect('mongodb://localhost:27017')
//   .then((client) => {
//     const db = client.db('quiz_questions');
//     const countriesCollection = db.collection('countries');
//     const capitalsCollection = db.collection('capitals');
//     const flagsCollection = db.collection('flags'); 

//   app.use( '/api/countries', createRouter( countriesCollection ));
//   app.use( '/api/capitals', createRouter( capitalsCollection ));
//   app.use( '/api/flags', createRouter( flagsCollection ));
// })
// .catch( console.error );

// new code!!!!!!!!!!
MongoClient.connect('mongodb+srv://Chrisssf:Chrimssf@freecluster.zfuvg.mongodb.net/world_quiz?retryWrites=true&w=majority')
  .then((client) => {
    const db = client.db('world_quiz');
    const countriesCollection = db.collection('countries');
    const capitalsCollection = db.collection('capitals');
    const flagsCollection = db.collection('flags'); 

  app.use( '/api/countries', createRouter( countriesCollection ));
  app.use( '/api/capitals', createRouter( capitalsCollection ));
  app.use( '/api/flags', createRouter( flagsCollection ));
})
.catch( console.error );

// may need this line to remove warning, see 15:33 in video 1.....
// useNewUrlParser: true 



// Handle Production

if (process.env.NODE_ENV === "production") {
  // Static folder
  app.use(express.static(__dirname + '/public'))

  // handle Single Page Aplication
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'))
}



// original code for running locally!!!!!!!!!!!!
// app.listen( 3000, function() {
//   console.log( `World Quiz server running on port ${this.address().port}` );
// });  

// New code for heroku. Uses port assigned by heroku OR if not on heroku, use originall port!!!!!!
const port = process.env.PORT || 3000

app.listen(port, function(){
  console.log(`Server started running on port ${port}`)
})