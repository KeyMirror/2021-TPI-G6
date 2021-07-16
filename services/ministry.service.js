const axios = require('axios')



const base_url = "https://ministeriodesarrolloproductivo.herokuapp.com/api/"

const getCompanyReports = async (jwt) => {

    let data = {
        response: null,
        error: null,
    }
    
    try {
        const response = await axios.get(
            base_url + "reports", {
            headers: {
                "token": jwt
            }
            });
        data.response = response;      
    } catch (error) {
        data.error = error;
    }
    return data;  
}


module.exports = {
    getCompanyReports,
}


