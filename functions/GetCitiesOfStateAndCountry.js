const axios = require('axios')

/**
 * Returns a list of Cities in State stateName of the Country countryName.
 * @param {String} countryName
 * @param {String} stateName
 * @returns {Array}
 */

module.exports= async(countryName,stateName)=>{
    try {
        const res= await axios.get(`https://vax.hyperx.cloud/cities?country=${countryName}&state=${stateName}`)
        return res.data

    } catch (error) {
        return {status:-1,message:'Unexpected Error'};
    }
}
