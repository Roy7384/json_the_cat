const request = require('request');
const searchApi = 'https://api.thecatapi.com/v1/breeds/search?q=';

const fetchBreedDescription = function(breedName, callback) {
  
  request(searchApi + breedName, (err, _, body) => {
    
    if (err) {
      callback(err, null);
      return;
    }
    const data = JSON.parse(body);
    if (!data.length) {
      return callback('Breed does not exist', null);
    }

    callback(null, data[0].description);
  });
};

module.exports = fetchBreedDescription;
