const axios = require('axios');
const config = require('../config.js');

let getReposByUsername = (gitUsername) => {
  // TODO - Use the axios module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  let options = {
    method: 'GET',
    url: `https://api.github.com/users/${gitUsername}/repos`,
    headers: {
      'User-Agent': 'HR-Full stack review project',
      'Authorization': `token ${config.TOKEN}`
    }
  };

  return axios(options)
  .then((response) => {
    console.log('Successfully able to get username from the Git' );
    return { response, status: response.status };
  })
  .catch((error) => {
    console.log('Failed to get username from the Git: ');
    return { error, status: error.response.status};
  });

}


module.exports.getReposByUsername = getReposByUsername;