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
    timestamps: true
  }
);

let Repo = mongoose.model('Repo', repoSchema);

let save = (repoDetails) => {
  // InsertMany()

  repoDetails.map(repo => {
    Repo.findOne({id: repo.id}, (err, res) => {
      if (err) {
        console.log('Error in finding a single id: ', err);
      } else {
        if (res) {
          return;
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

module.exports = { save, Repo };