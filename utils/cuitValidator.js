const cuitValidator = (cuit) =>{

    const acceptValues = /^[0-9]+$/;

    if (! cuit.length == 10 && cuit.match(acceptValues)) {
        return true;
    }
    return false;
}

    
module.exports = cuitValidator; 