const { ministryService } = require('../services'); 
const { Response } = require('../utils/'); 
const { daysChecker } = require('../utils'); 

const daysController = async (req, res) => {
    const { cuit } = req.params; 


    try {
        const reportes = await ministryService.getById(cuit); 
        const fields = ["date_upload", "day_limit", "infoEmpresa", "cuit"]; 
        const data = {
            alert: [], 
            status: false
        }

        for (let i = 0 ; i < reportes["data"].length; i++){
            let {notification, alert} = await daysChecker(reportes["data"][i], fields); 

            if (notification["status"]){
                data["alert"].push(alert); 
                data["status"] = notification["status"]; 
            }
        }

        return Response.success(res, data); 

    }catch(errors){
        return Response.error(res, errors); 
    }
}

const notificationController = {
    daysController
}

module.exports = notificationController; 