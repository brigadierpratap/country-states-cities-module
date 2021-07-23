const axios = require("axios");
/**
 * Returns a detailed info of the Country countryName.
 * @param {String} countryName
 * @returns {Array}
 */
module.exports = async countryName => {
  try {
    const res = await axios.get(
      `https://countrystatecityapi.herokuapp.com/country?country=${countryName}`
    );
    return res.data;
  } catch (error) {
    return { status: -1, message: "Unexpected Error" };
  }
};
