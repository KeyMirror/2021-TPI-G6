const db = require('../models'); 

const getAll = async (entity) => {
    try{
        const result = await db[entity].findAll(); 
        return result; 
    }catch(error){
        console.log(error); 
        return; 
    }
}

const getByField = async (entity, toWhere) => {
    try{
        const result = await db[entity].findOne({ where: toWhere }); 
        return result; 
    }catch(error){
        console.log(error); 
        return; 
    }
}

const create = async (entity, data) => {
    try{
        await db[entity].create(data); 
        return true;  
    }catch(error){
        console.log(error); 
        return false; 
    }
}

const update = async (entity, data) => {
    const { id } = data; 
    try{
        await db[entity].update(data, { where: { id:id } }); 
        return true; 
    }catch(error){
        console.log(error); 
        return false; 
    }
    
}

const destroy = async (entity, id) => {
    try{
        await db[entity].destroy({ where: { id: id } }); 
        return true; 
    }catch(error){
        console.log(error); 
        return false; 
    }
}


const baseRepository = {
    getAll,
    getByField,
    create,
    update, 
    destroy
}

module.exports = baseRepository; 
