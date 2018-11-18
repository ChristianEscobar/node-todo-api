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

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bee452ac2089e97fff93b97')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then( result => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5becfa2d8a222a05f3c63242')
  }, {
    $set: {
      name: 'Christian'
    },
    $inc: {
      age: 30
    }
  },{
    returnOriginal: false
  }).then( result => {
    console.log(result);
  });

  //db.close();
});

