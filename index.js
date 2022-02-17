const fetchBreedDescription = require('./breedFetcher');
const catName = process.argv[2];

fetchBreedDescription(catName, (error, des) => {
  console.log(error);
  if (error) {
    console.log('Error fetch details: ', error);
  } else {
    console.log(des);
  }
});

