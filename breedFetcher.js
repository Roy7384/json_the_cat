const request = require('request');

const catName = process.argv.slice(2);
const searchApi = 'https://api.thecatapi.com/v1/breeds/search?q=';


request(searchApi + catName, (err, response, body) => {
  if (err) {
    return console.log('Request fail: ' + err);
  }

  const data = JSON.parse(body);
  
  if (!data.length) {
    return console.log('Breed requrested is not found.');
  }
  console.log(data[0].description);
});