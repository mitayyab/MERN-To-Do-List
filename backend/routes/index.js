const express = require("express")

const taskContoller = require("../controller/Task")
const CreateTaskMiddelware = require("../middleware/CreateTask")
const UpdateTaskMiddleware = require("../middleware/UpdateTask");
const DeleteTaskMiddleware = require("../middleware/DeleteTask");

const router = express.Router()

router.post('/createTask', CreateTaskMiddelware.validateReq, CreateTaskMiddelware.preExistingCheck, taskContoller.Create);
router.get('/getAllTasks', taskContoller.GetAll);
router.patch('/updateTask', UpdateTaskMiddleware.validateReq, UpdateTaskMiddleware.NonPreExistingCheck, taskContoller.Update);
router.delete('/deleteTask/:_id', DeleteTaskMiddleware.NonPreExistingCheck, taskContoller.Delete);

module.exports = router;