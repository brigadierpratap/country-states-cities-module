const {
  getAllCountries,
  getStatesByCountry,
  getCitiesByStateAndCountry,
} = require("./index");

const testFunction = async () => {
  // returns list of all the countries in the world
  getAllCountries().then(data => {
    console.log(data);
  });

  /* returns the list of states in the country passed as argument
     Also note that for countries having spaces in their name, do not omit spaces.
  */
  getStatesByCountry("United States").then(data => {
    console.log(data);
  });
  // return the list of cities for the provided pair of Country and States
  getCitiesByStateAndCountry("United States", "Alabama").then(data => {
    console.log(data);
  });
};
