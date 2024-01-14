const Joi = require("joi")
const Task = require("../models/Task")

async function validateReq (req, res, next) {

    const UpdateSchema = Joi.object({
        _id: Joi.string().required(),
        completed: Joi.boolean(),
        task: Joi.string().min(3).max(250)
    });

    const { error } = UpdateSchema.validate(req.body);

    if(error) {
        return next(error);
    }        

    return next();
}

async function NonPreExistingCheck (req, res, next) {
    try {
        const {_id} =  req.body;
        
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

module.exports = {validateReq, NonPreExistingCheck};