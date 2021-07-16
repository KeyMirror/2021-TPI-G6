const { ministryService } = require('../../services');
const { notificationRepository } = require('../../dal/repositories');
const { daysChecker, Response } = require('../../utils'); 

const statusQuery = async (req, res) => {
    
    const jwt = req.headers["authorization"];
    
    try {
        let data = await ministryService.getCompanyReports(jwt);

        if (data.error){
            return Response.error(
                res,
                data.error,
                message = 'ha ocurrido un error',
                status = 400
            ) 
        }

        const reports = data.response.data[0].report

        
        if (reports.length === 0){
            return Response.success(
                res,
                message = 'no se encontraron datos registrados.'
            )
        }
 
        const notification = {
            status: true,
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

        console.log(data)
        data = {
            notification: notification,
            alerts: alerts,
        }

        return Response.success(res, data); 

    }catch(errors){
        return Response.error(res, errors); 
    }
}


const getAllNotifications = async (req, res) => {
    const notifications = notificationRepository.getAll();

    const data = {
        notifications
    }

    return Response.success(res, data);
}






const notificationsController = {
    statusQuery,
    getAllNotifications,
}

module.exports = notificationsController; 