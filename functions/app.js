const express = require('express');
const path = require('path');
// const { db } = require('./models');

const db = require('./firebase');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.get('/users', async (req, res) => {

  console.log(db)
  // const users = db.collection('users').get()

  // const users = await User.findAll({
  //   attributes: ['nickname', 'createdAt']
  // })

  // res.json(users);
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/register.html'));
});


app.post('/register', async (req, res) => {
  // const user = await User.create(req.body);
  // res.json(user);

  const user = {
    nickname: 'teste1234',
    password: 'senha1234'
  }

  db.collection('users').add(user).then(user => { res.json(user.get().data()) })
});

module.exports = app;