const { alertRepository } = require('../dal/repositories'); 

const getName = require('./getName');

const daysChecker = async (data = {}) => {
    const date = new Date(data["date_upload"]);
    let alert = null

    if (data["day_limit"] < date.getUTCDate()) {

        alert = {
            title: `Incumplimiento mes: ${getName(date.getUTCMonth()+1)}`,
            description: `Al dia de hoy se encuentra excedido ${date.getUTCDate()-data["day_limit"]} dias.`,
            date: date,
        }

        await alertRepository.createAlert(alert);  

    }

    return {
        alert
    }
}

module.exports = daysChecker; 