

const prevMonth = (month) => {
    let prev = '';
    switch(month) {
        case "01":
            prev = "12";
            break;
        case "02":
            prev = "01";
            break;
        case "03":
            prev = "02";
            break;
        case "04":
            prev = "03";
            break;
        case "05":
            prev = "04";
            break;
        case "06": 
            prev = "05";
            break;
        case "07":
            prev = "06";
            break;
        case "08":
            prev = "07";
            break;
        case "09":
            prev = "08";
            break;
        case "10":
            prev = "09";
            break;
        case "11":
            prev = "10"
            break;
        case "12":
            prev = "11";
            break;
    }
    return prev;
}

module.exports = prevMonth; 