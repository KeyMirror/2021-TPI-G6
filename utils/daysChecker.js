const db = require('../models');
const Notification = require('../models/notification')(db.sequelize, db.Sequelize);
const Alert = require('../models/alert')(db.sequelize, db.Sequelize); 

const daysChecker = async (data = {}, fields=[]) => {
    let day = parseInt(data[fields[0]].split('-')[2]); 
    const notification = {
        status:false, 
        cuit: data[fields[2]][fields[3]]
    }
    const alert = {
        name: "", 
        description: "",
        notification_id: null
    }
    if (data[fields[1]] < day){

        notification["status"] = true; 

        const notificationCreated = await Notification.create(notification); 

        alert["name"] = "Day limit exceed"; 
        alert["description"] = "Established day for submit this report exceed.\n This report should have uploaded before the day: " + toString(reportes[i].day_limit); 
        alert["notification_id"] = notificationCreated.id; 

        const alertCreated = await Alert.create(alert); 

    }

    return {
        notification, 
        alert
    }
}

module.exports = daysChecker; 