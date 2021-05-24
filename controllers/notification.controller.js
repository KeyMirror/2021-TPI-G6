const { ministryService } = require('../services'); 
const db = require('../models');
const Notification = require('../models/notification')(db.sequelize, db.Sequelize);
const Alert = require('../models/alert')(db.sequelize, db.Sequelize); 

const daysController = async (req, res) => {
    const { cuit } = req.params; 


    try {
        const reportes = await ministryService.getById(cuit); 
        let day = ""; 
        console.log(reportes); 
        for (let i ; i < reportes["data"].length; i++){
            day = reportes[i]["date_upload"].split("T");
            day = (day[0].split("-")[2]);
            day = parseInt(day); 
            if (day > reportes[i]["day_limit"]){
                const notification = {
                    status: true, 
                    cuit: cuit
                }

                const notificationCreated = await Notification.create(notification); 

                const alert = {
                    name: "Day limit exceed", 
                    description: "Established day for submit this report exceed.\n This report should have uploaded before the day: " + toString(reportes[i].day_limit),
                    notification_id: notificationCreated.id
                }

                const alertCreated = await Alert.create(alert); 

                return res.status(200).send({
                    status: notification.status, 
                    alerts: [
                        {
                            "name":alert.name, 
                            "description":alert.description
                        }
                    ], 
                    errors: null
                })
            }

        }

        return res.status(200).send({
            status: false, 
            alerts: [], 
            errors: null
        })
    }catch(errors){
        console.log(errors); 
        return res.status(404).send({
            status: null, 
            alerts: [], 
            errors: errors
        })
    }
}

const notificationController = {
    daysController
}

module.exports = notificationController; 