const { alertRepository } = require('../dal/repositories');

const getName = require('./getName');

const daysChecker = async (data = {}) => {
    const date = new Date(data["date_upload"]);
    let alert = null

    // TO DO: Check period's month and date_upload.month 

    if (data["day_limit"] < date.getUTCDate()) {

        alert = {
            title: `mes: ${getName(date.getUTCMonth()+1)}`,
            description: `Dia limite de presentacion superado, exceso de:  ${date.getUTCDate()-data["day_limit"]} dias.`,
            date: date,
        }

        await alertRepository.createAlert(alert);

        alert["date"] = data["date_upload"];
    }

    return {
        alert
    }
}

module.exports = daysChecker; 