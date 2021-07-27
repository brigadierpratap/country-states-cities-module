const axios = require('axios')
/**
 * Returns a list of States in the Country countryName.
 * @param {String} countryName
 * @returns {Array}
 */
module.exports= async(countryName)=>{
    try {
        const res= await axios.get(`https://vax.hyperx.cloud/states?country=${countryName}`)
        return res.data

    } catch (error) {
        return {status:-1,message:'Unexpected Error'};
    }
}
