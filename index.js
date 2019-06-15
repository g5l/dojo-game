const express = require('express');
var path = require('path');
const { User } = require('./db/models');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.get('/users', async (req, res) => {
  const users = await User.findAll({
    attributes: ['nickname', 'createdAt']
  })

  res.json(users);
});

app.get('/register', (req, res) => {
  res.sendFile(path.join(__dirname + '/src/register.html'));
});


app.post('/register', async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

app.listen(3000);