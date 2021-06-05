const cuitValidator = (cuit) =>{

    const acceptValues = /^[0-9]+$/;

    console.log(cuit.length)
    console.log(cuit.match(acceptValues))
 
    if (cuit.length !== 11 || !cuit.match(acceptValues)) {
        return false;
    }
    return true;
}

    
module.exports = cuitValidator; 