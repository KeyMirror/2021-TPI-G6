const { ministryService } = require('../../services');
const { Response, cuitValidator } = require('../../utils');

const getAllReports = async (req, res) => {

    try {
        let reports = ministryService.getAll();
        reports = reports["data"]
        return Response.success(res, {reports}); 
    }catch(errors){
        return Response.error(res, errors); 
    }
}

const getAllCuits = async (req, res) => {

    try {
        let reports = ministryService.getAll();
        reports = reports["data"];
        let cuits = [];

        for (idx in reports) {
            cuits.push(reports[idx]["infoEmpresa"]["cuit"])
        }

        return Response.success(res, {cuits}); 
    }catch(errors){
        return Response.error(res, errors); 
    }
}

const getAllCompanies = async (req, res) => {

    try {
        let reports = ministryService.getAll();
        reports = reports["data"];
        let companies = [];

        for (idx in reports) {
            companies.push(reports[idx]["infoEmpresa"])
        }

        return Response.success(res, {companies}); 
    }catch(errors){
        return Response.error(res, errors); 
    }
}

const getByCuit = async (req, res) => {

    const { cuit } = req.params;

    if (! cuitValidator(cuit)) {
        return Response.error(
            res,
            err=true, 
            message = 'no se ingreso un cuit valido',
            status = 400
        )
    }

    try {
        let reports = ministryService.getById(cuit);
        reports = reports["data"]

        if (reports.length === 0){
            return Response.success(
                res,
                message = 'no se encontraron datos para el cuit ingresado',
                status = 400
            )
        }

        return Response.success(res, {reports}); 

    }catch(errors){
        return Response.error(res, errors); 
    }
}


const reportsController = {
    getAllReports,
    getAllCuits,
    getAllCompanies,
    getByCuit,
}

module.exports = reportsController;

