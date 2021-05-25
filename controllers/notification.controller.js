const { ministryService } = require('../services'); 
const { Response } = require('../utils/'); 
const db = require('../models');
const Notification = require('../models/notification')(db.sequelize, db.Sequelize);
const { daysChecker } = require('../utils'); 

const daysController = async (req, res) => {
    const { cuit } = req.params; 


    try {
        let reports = ministryService.getById(cuit);
        reports = reports["data"]

        const notification = {
            status: true,
            cuit: cuit,
            message: "Se encuentra al dia",
        }

        let alerts = []

        for (i in reports) {
            let {alert} = await daysChecker(reports[i]); 

            if (alert) {
                alerts.push(alert); 
            }
        }

        if (alerts.length > 0) {
            notification["status"] = false;
            notification["message"] = "Su situacion es de incumplimiento, revise las alertas y regularice su situacion con el ministerio.";
            await Notification.create(notification)
        }

        const data = {
            notification: notification,
            alerts: alerts,
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