const {
  getAllCountries,
  getStatesByCountry,
  getCitiesByStateAndCountry,
  getCountry,
} = require("./index");

const testFunction = async () => {
  // returns list of all the countries in the world
  await getAllCountries()
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    });

  /* returns the list of states in the country passed as argument
     Also note that for countries having spaces in their name, do not omit spaces.
  */
  await getStatesByCountry("United States")
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    });

  // return the list of cities for the provided pair of Country and States
  await getCitiesByStateAndCountry("United States", "Alabama")
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    });

  // return a detailed information about the provided Country
  await getCountry("India")
    .then(data => {
      console.log(data);
    })
    .catch(e => {
      console.log(e);
    });
};

testFunction();
