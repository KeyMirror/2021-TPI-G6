//const axios = require('axios')

const dataSet = require('../utils')

const getById = (cuit) => {
    const data = [];
    for (let i = 0 ; i < dataSet.length; i++){

        if (dataSet[i]["infoEmpresa"]["cuit"] === parseInt(cuit)){ 
            data.push(dataSet[i]);
        } 
        
    }

    return {data};
}

const getAll = () => {
    const data = dataSet;
    return {data};

}

module.exports = {
    getById,
    getAll,
}


