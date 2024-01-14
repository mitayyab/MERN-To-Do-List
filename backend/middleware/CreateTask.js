const Joi = require("joi")
const Task = require("../models/Task")

async function validateReq (req, res, next) {

    const taskSchema = Joi.object({
        task: Joi.string().min(3).max(250).required(),
        completed: Joi.boolean().required(),
    });

    const { error } = taskSchema.validate(req.body);

    if(error) {
        return next(error);
    }

    return next();
}

async function preExistingCheck (req, res, next) {
    try {
        const {task} = req.body;
            
        const taskInUse = await Task.exists({task});

        if (taskInUse) {
            const error = {
                status: 409,
                message: "task already created, use another task"
            }

            return next(error);
        }

        next()
        
    } catch (error) {
        return next(error);
    }
}

module.exports = {validateReq, preExistingCheck};