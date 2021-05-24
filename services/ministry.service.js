//const axios = require('axios')

const dataSet = require('../utils/mockUp/dataSet')

const getById = (cuit) => {
    const data = dataSet.items[cuit];
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


