const axios = require('axios')

module.exports= async()=>{
    try {
        const res= await axios.get('https://vax.hyperx.cloud/countries')
        return res.data

    } catch (error) {
        return {status:-1,message:'Unexpected Error'};
    }
    

}
