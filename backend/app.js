var bodyParser = require('body-parser');
var cors = require('cors');
var mongodb = require('mongodb');
var express = require('express');
var ObjectId = require('mongodb').ObjectID;
var app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var MongoClient = mongodb.MongoClient;
var mongoUrl = 'mongodb://localhost:27017/brunch1';

//View All Restaurants:
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

app.post('/', function(request, response){
  console.log('post ajax request received!');
  console.log('request.body:', request.body);

  MongoClient.connect(mongoUrl, function (err, db) {
    var restaurantsCollection = db.collection('restaurants');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    }
    else {
      restaurantsCollection.find(request.body).toArray(function (err, result) {
        if (err) {
          console.log(err);
          response.json("error");
        } else if (result.length) {
          console.log('Results Found:', result);
          response.json(result);
        } else { //
          console.log('No results found!');
          response.json(result);
        }
      }); // close find
    } // close else
  }); // close mongo connect
}); // close app.get

//Edit existing restaurant by adding a tip:
app.put('/', function(request, response){
  console.log('put ajax request received!');
  var mongoID = mongodb.ObjectID(request.body.searchID);

  // console.log('ObjectId(request.body.searchID):', ObjectId(request.body.searchID));
  // console.log('typeof id:', typeof request.body.searchID);

  //tip needs to be inserted into array of tips:
  const tip = {
    author: request.body.author,
    tip: request.body.tip
  };

  MongoClient.connect(mongoUrl, function (err, db) {
    var contactsCollection = db.collection('restaurants');
    if (err) {
      console.log('Unable to connect to the mongoDB server. ERROR:', err);
    } else {
      //babblsCollection.update({_id: mongoID}, {$set: {babbl: updatedBabbl}});
      contactsCollection.update({_id: mongoID}, {$push: {tips: tip}}, function (err, result) {
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
      }); // close update
    } // close else
  }); // close mongo connect
}); // close app.put


app.listen(3000, function(){
  console.log('listen to events on a "port".')
});
