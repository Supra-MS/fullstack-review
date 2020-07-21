const express = require('express');
const bodyParser = require('body-parser');
const { getReposByUsername } = require('./../helpers/github.js');
const db = require('./../database');
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));

app.post('/repos', function (req, res) {
  let repos = getReposByUsername(req.body.username);
  Promise.resolve(repos)
    .then(data => {
      db.save(data);
    });
  res.status(200).send({message: 'Posted user name!'});
});

app.get('/repos', function (req, res) {
  db.Repo.find({})
    .limit(25)
    .then(response => {
      res.send(response)
    })
    .catch(error => {
      console.log('Error retrieving the data: ', error);
    })
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

