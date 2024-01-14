const Joi = require("joi")
const Task = require("../models/Task")

async function NonPreExistingCheck (req, res, next) {
    try {
        const {_id} =  req.params;
       
        const taskExists = await Task.exists({_id})
        
        if(!taskExists){
            const error = {
                status: 404,
                message: "task does not exist"
            }

            return next(error);
        }

        next()
        
    } catch (error) {
        return next(error);
    }
}

module.exports = {NonPreExistingCheck};