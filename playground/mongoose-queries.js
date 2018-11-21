const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// let id = '5bf3a60c8d78220a2db2064811';

// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => { 
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found')
//   }
//   console.log('Todo', todo);
// }).catch( (e) => console.log(e) );

// User.findById 3 cases:
//  Query works but no user
//  User found
//  Errors

let id = '5bf1aefb4cd4a706ecde70dc';
User.findById(id).then( (user) => {
  if(!user) {
    return console.log('User not found');
  }
  console.log(JSON.stringify(user, undefined, 2));
}).catch( (e) => console.log(e) );