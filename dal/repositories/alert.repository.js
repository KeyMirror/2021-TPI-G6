const baseRepository = require('./base.repository'); 
const entity = "Alert"; 

const createAlert = async (data) => {
    try{
        await baseRepository.create(entity, data); 
        return true; 
    }catch(error){
        console.log(error); 
        return false; 
    }
}

const getAll = async () => {
    try{
        const alerts = await baseRepository.getAll(entity); 
        return alerts; 
    }catch(error){
        console.log(error); 
        return; 
    }
}

const getAlert = async (id) => {
    const toWhere = {
        id: id
    }

    try {
        const alert = await baseRepository.getByField(entity, toWhere); 
        return alert; 
    }catch(error){
        console.log(error); 
        return; 
    }
}

const updateAlert = async (data) => {
    try{
        await baseRepository.update(entity, data); 
        return true; 
    }catch(error){
        console.log(error); 
        return false; 
    }
}

const deleteAlert = async (id) => {
    try{
        await baseRepository.destroy(entity, id); 
        return true; 
    }catch(error){
        console.log(error); 
        return false; 
    }
}

const alertRepository = {
    createAlert,
    getAlert,
    getAll,
    updateAlert, 
    deleteAlert
}

module.exports = alertRepository; 
