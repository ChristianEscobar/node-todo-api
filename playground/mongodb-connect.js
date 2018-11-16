// Create a client to connect to the server
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Object destructing
// let user = {name: 'Chris', age: 42};
// let {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err) {
    return console.log('Unable to connect to MongoDB server');
  }
  
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert todo', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //Insert new doc into Users(name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Christian Escobar',
  //   age: 25,
  //   location: 'Daly City, CA'
  // }, (err, result) => {
  //   if(err) {
  //     return console.log('Unable to insert users', err);
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('Users').find({
    name: 'Christian Escobar'
  }).toArray().then( docs => {
    console.log('Users');
    console.log(JSON.stringify(docs, undefined, 2));
  }, err => {
    console.log('Unable to fetch users', err);
  });

  db.close();
});

