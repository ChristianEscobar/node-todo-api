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

  // db.collection('Todos').find({
  //   _id: new ObjectID('5becf6e159a999dda9409bac')
  // }).toArray().then( (docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Todos').find().count().then( (count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  //db.close();
});

