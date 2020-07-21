const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
    index: true
  },
  repoName: {
    type: String
  },
  owner: {
    type: String
  },
  html_url: {
    type: String
  }
},
  {
    timestamp: true
  }
);

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoDetails) => {
  // InsertMany()

  repoDetails.forEach(repo => {
    Repo.findOne({id: repo.id}, (err, res) => {
      if (err) {
        console.log('Error in finding a single id: ', err);
      } else {
        if (res) {
          console.log('Record already exists!!');
        } else {
          Repo.create({
            id: repo.id,
            repoName: repo.name,
            owner: repo.owner.login,
            html_url: repo.html_url
          });
        }
      }
    })
  })
}

module.exports.save = save;