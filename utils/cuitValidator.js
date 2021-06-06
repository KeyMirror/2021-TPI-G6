const cuitValidator = (cuit) =>{

    const acceptValues = /^[0-9]+$/;

    if (cuit.length !== 11 || !cuit.match(acceptValues)) {
        return false;
    }
    return true;
}

    
module.exports = cuitValidator; 