const db = require('../models');
const Notification = require('../models/notification')(db.sequelize, db.Sequelize);
const Alert = require('../models/alert')(db.sequelize, db.Sequelize); 

const daysChecker = async (data = {}) => {
    console.log("estoy en daysChecker")
    const date = new Date(data["date_upload"]);

    let alert = null

    if (data["day_limit"] < date.getDay()) {

        notification["status"] = false;

        alert = {
            title: `Incumplimiento mes: ${date.getMonth()}`,
            description: `Al dia de hoy se encuentra excedido ${date.getDay()-reportes[i]["day_limit"]} dias.`,
            date: date,
        }

        const alertCreated = await Alert.create(alert); 

    }

    return {
        alert
    }
}

module.exports = daysChecker; 