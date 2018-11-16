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

  // deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch'
  // }).then( result => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then( result => {
  //   console.log(result);
  // });

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then( result => console.log(result));

  // Delete Many
  // db.collection('Users').deleteMany({
  //   name: 'Christian Escobar'
  // }).then( result => {
  //   console.log(result);
  // });

  // DeleteOne by ID
  // db.collection('Users').deleteOne({
  //   _id: new ObjectID('5becfa41efbf2205fbf52038')
  // }).then( result => {
  //   console.log(result);
  // });

  // FindOneAndDelete by ID
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5becfa2424252505ed99bf13')
  }).then( result => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
});

