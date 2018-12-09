require('./config/config');

const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {User} = require('./models/user');
let {authenticate} = require('./middleware/authenticate');

let app = express();
const port = process.env.PORT;

// Function middleware
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then( doc => {
    res.status(200).send(doc);
  }, e => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    // Send an array of data wrapped in an object
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET /todos/1234
app.get('/todos/:id', (req, res) => {
  // Don't forget return to stop function execution
  let id = req.params.id;
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  Todo.findById({
    _id: id
  }).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }
    // Send back todo as an object
    res.status(200).send({todo});
  }).catch((e) => res.status(400).send());
});

app.delete('/todos/:id', (req, res) => {
  // get the id
  let id = req.params.id;

  // validate the id
    // if not valid return 404
  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }
  // remove todo by id
  Todo.findByIdAndRemove(id).then((todo) => {
    // success
      // if no doc, send 404
      // else send doc back with 200
    if(!todo) {
      return res.status(404).send();
    }

    res.status(200).send({todo});
  }).catch((e) => {
    // error
    // send back 400 with empty body
    console.log(e);
    res.status(400).send();
  });
});

app.patch('/todos/:id', (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['text', 'completed']);

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else {
    body.completed = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
    if(!todo) {
      return res.status(404).send();
    }

    res.status(200).send({todo});
  }).catch((e) => res.status(400).send());
});

app.post('/users', (req, res) => {
  let body = _.pick(req.body, ['email', 'password']);
  let user = new User(body);

  user.save().then(() => {
    return user.generateAuthToken();
  }).then((token) => {
    res.header('x-auth', token).send(user);
  }).catch(e => {
    res.status(400).send(e);
  });
});

app.get('/users/me', authenticate, (req, res) => {
  res.send(req.user);
});

// POST /users/login {email, password}
app.post('/users/login', (req, res) => {
  let body = _.pick(req.body, ['email', 'password']);
  
  User.findByCredentials(body.email, body.password).then((user) => {
    return user.generateAuthToken().then((token) => {
      res.header('x-auth', token).send(user);
    });
  }).catch((e) => {
    res.status(400).send();
  });
});

app.delete('/users/me/token', authenticate, (req, res) => {
  req.user.removeToken(req.token).then(() => {
    res.status(200).send();
  }, () => {
    res.status(400).send();
  });
});

app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};




