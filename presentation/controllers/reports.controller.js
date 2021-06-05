const { ministryService } = require('../../services');
const { Response } = require('../../utils/');

const getAll = async (req, res) => {

    try {
        let reports = ministryService.getAll();
        reports = reports["data"]
        return Response.success(res, reports); 
    }catch(errors){
        return Response.error(res, errors); 
    }
}

const reportsController = {
    getAll,
}

module.exports = reportsController;

