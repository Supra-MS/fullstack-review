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
  // TODO - your code here!
  // This route should send back the top 25 repos
});

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

