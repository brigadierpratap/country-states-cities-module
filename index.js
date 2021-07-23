const getAllCountries = require("./functions/GetAllCountries");
const getStatesByCountry = require("./functions/GetStatesOfCountry");
const getCitiesByStateAndCountry = require("./functions/GetCitiesOfStateAndCountry");
const getCountry = require("./functions/GetCountryInfo");

module.exports = {
  getAllCountries,
  getStatesByCountry,
  getCitiesByStateAndCountry,
  getCountry,
};
