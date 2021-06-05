const { ministryService } = require('../../services');
const { notificationRepository } = require('../../dal/repositories'); 
const { Response } = require('../../utils/'); 
const { daysChecker, cuitValidator } = require('../../utils'); 

const statusQuery = async (req, res) => {
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
            await notificationRepository.createNotification(notification); 
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



const notificationsController = {
    statusQuery,
}

module.exports = notificationsController; 