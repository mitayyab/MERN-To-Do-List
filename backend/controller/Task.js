const Joi = require("joi")
const Task = require("../models/Task")

const authContoller = {

    async Create (req, res, next) {
        try {

            const {task, completed} = req.body;

            const newTask = new Task({
                task, 
                completed
            });
            const createdTask = await newTask.save();
    
            return res.status(200).json({createdTask})

        } catch (error) {
            return next(error)
        }
    },

    async GetAll (req, res, next) {
        try {
            const allTasks = await Task.find({});

            return res.status(200).json({allTasks})

        } catch (error) {

            return next(error);
        }
    },

    async Update (req, res, next) {
        try {
            const {_id, ...changes} =  req.body;
    
            const updatedTask = await Task.findByIdAndUpdate({_id}, {...changes}, {returnDocument:'after'});

            return res.status(201).json({updatedTask});

        } catch (error) {

            next(error);
        }
    },

    async Delete (req, res, next) {

        try {
            const {_id} =  req.params;
    
            const deletedTask = await Task.findByIdAndDelete({_id});

            return res.status(201).json({deletedTask});

        } catch (error) {
            
            next(error);
        }
    },

}

module.exports = authContoller;
