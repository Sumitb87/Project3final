var bodyParser = require('body-parser');
var cors = require('cors');
var mongodb = require('mongodb');
var express = require('express');
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var MongoClient = mongodb.MongoClient;
var mongoUrl = 'mongodb://localhost:27017/brunch';

//View All Recipes:
app.get('/', function(request, response){
  console.log('get ajax request received!');

  MongoClient.connect(mongoUrl, function (err, db) {
    var restaurantsCollection = db.collection('restaurants');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      restaurantsCollection.find().toArray(function (err, result) {
        if (err) {
          console.log(err);
          response.json("error");
        } else if (result.length) {
          console.log('Results Found:', result);
          response.json(result);
        } else { //
          console.log('No results found!');
          response.json("no results found!");
        }
      }); // close find
    } // close else
  }); // close mongo connect
}); // close app.get

//Find recipe by name:
// app.get('/recipeByName/:name', function(request, response){
//   console.log('get ajax request received!');
//
//   MongoClient.connect(mongoUrl, function (err, db) {
//     var contactsCollection = db.collection('recipes');
//     if (err) {
//       console.log('Unable to connect to the mongoDB server. ERROR:', err);
//     } else {
//       contactsCollection.find(request.params).toArray(function (err, result) {
//         if (err) {
//           console.log(err);
//           response.json("error");
//         } else if (result.length) {
//           console.log('Results Found:', result);
//           response.json(result);
//         } else { //
//           console.log('No results found!');
//           response.json("no results found!");
//         }
//       }); // close find
//     } // close else
//   }); // close mongo connect
// }); // close app.get

//Create new recipe:
// app.post('/addRecipe', function(request, response){
//   console.log('post ajax request received!');
//   console.log('request:', request);
//
//   MongoClient.connect(mongoUrl, function (err, db) {
//     var contactsCollection = db.collection('recipes');
//     if (err) {
//       console.log('Unable to connect to the mongoDB server. ERROR:', err);
//     } else {
//       contactsCollection.insert(request.body, function (err, result) {
//         if (err) {
//           console.log(err);
//           response.json("error");
//         } else if (result.length) {
//           console.log('Results Found:', result);
//           response.json(result);
//         } else { //
//           console.log('No results found!');
//           response.json("no results found!");
//         }
//       }); // close find
//     } // close else
//   }); // close mongo connect
// }); // close app.post

//Edit existing recipe:
// app.put('/editRecipe', function(request, response){
//   console.log('put ajax request received!');
//   //console.log('request:', request);
//   const searchName = {name: request.body.name};
//   const updatedRecipe = request.body;
//
//   MongoClient.connect(mongoUrl, function (err, db) {
//     var contactsCollection = db.collection('recipes');
//     if (err) {
//       console.log('Unable to connect to the mongoDB server. ERROR:', err);
//     } else {
//       contactsCollection.update(searchName, updatedRecipe, function (err, result) {
//         if (err) {
//           console.log(err);
//           response.json("error");
//         } else if (result.length) {
//           console.log('Results Found:', result);
//           response.json(result);
//         } else { //
//           console.log('No results found!');
//           response.json("no results found!");
//         }
//       }); // close find
//     } // close else
//   }); // close mongo connect
// }); // close app.put


app.listen(3000, function(){
  console.log('listen to events on a "port".')
});
