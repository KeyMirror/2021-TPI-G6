const baseRepository = require('./base.repository'); 
const entity = "Notification"; 

const createNotification = async(data) => {
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
        const notifications = await baseRepository.getAllDescOrderer(entity); 
        return notifications; 
    }catch(error){
        console.log(error); 
        return; 
    }
}

const getNotification = async (id) => {
    try{
        const toWhere = {
            id: id
        }
        const notification = await baseRepository.getByField(entity, toWhere); 
        return notification; 
    }catch(error){
        console.log(error); 
        return; 
    }
}

const updateNotification = async (data) => {
    try{
        await baseRepository.update(entity, data); 
        return true; 
    }catch(error){
        console.log(error); 
        return false; 
    }
}

const deleteNotification = async (id) => {
    try{
        await baseRepository.destroy(entity, id); 
        return true; 
    }catch(error) {
        console.log(error); 
        return false; 
    }
}


const notificationRepository = {
    createNotification,
    getAll,
    getNotification,
    updateNotification,
    deleteNotification
}

module.exports = notificationRepository; 
