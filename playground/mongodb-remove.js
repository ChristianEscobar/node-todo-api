const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });


// Todo.findOneAndRemove
// Todo.findByIdAndRemove
Todo.findOneAndRemove('5bfb691143fdc7110d5c68c4').then((todo) => {
  console.log(todo);
}).catch( (e) => {
  console.log(e);
});