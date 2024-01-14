const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
    {
        task: String,
        completed: Boolean,
    },
    {timestamps: true}
  );

module.exports = new mongoose.model("Task", TaskSchema);