import React, { useState } from 'react'
import moment from 'moment'
import axios from 'axios';

import CheckCircleIcon from '../assets/icons/CheckCircleIcon'
import DotIcon from '../assets/icons/DotIcon'

export default function TaskList({ taskList, getAllTasks, taskStates, setTaskStates }) {
    const [viewTaskDetails, setViewTaskDetails] = useState([]);

    const handleDelete = async (id) => {
        const res = await axios.delete(`http://localhost:8000/deleteTask/${id}`);

        if (res.status === 201) {
            getAllTasks();
        }
    };

    const handleTaskUpdate = async (id, completed, task) => {
        try {
            const res = await axios.patch(`http://localhost:8000/updateTask`, {
                _id: id,
                completed: completed,
                task: task,
            })
            if (res.status === 201) {
                getAllTasks();
            }
        } catch (error) {
        }
    };

    const handleDisable = (index, task) => {
        const updatedTaskStates = [...taskStates];
        updatedTaskStates[index].disable = !updatedTaskStates[index].disable;
        setTaskStates(updatedTaskStates);
        if (updatedTaskStates[index].disable) {
            handleTaskUpdate(task._id, task.completed, updatedTaskStates[index].editedText);
        }
    };

    const handleShowTask = (id) => {
        if (viewTaskDetails.includes(id)) {
            const newViews = viewTaskDetails.filter((taskID) => taskID !== id);
            setViewTaskDetails(newViews);
        }
        else {
            setViewTaskDetails(viewTaskDetails => [...viewTaskDetails, id])
        }
    }

    return (
        <div className='todo-list mt-2 overflow-auto'>
            {taskList.length === 0 && 
                <div className='center-from-top'>
                    No Tasks Today
                </div>
            }
            {taskList?.map((task, index) => (
                <React.Fragment key={task._id}>

                    <div className='d-flex justify-content-between list-title p-2 rounded'>

                        <span>
                            <CheckCircleIcon onClick={() => handleTaskUpdate(task._id, !task.completed, task.task)} fill={task.completed ? 'green' : 'none'} stroke="#7c6f5a" height="25" className="m-2" />
                            <span onDoubleClick={() => handleDisable(index, task)}>

                                <input
                                    value={taskStates[index].disable ? task.task : taskStates[index].editedText}
                                    onChange={(e) => {
                                        const updatedTaskStates = [...taskStates];
                                        updatedTaskStates[index].editedText = e.target.value;
                                        setTaskStates(updatedTaskStates);
                                    }}
                                    disabled={taskStates[index].disable}
                                    className={taskStates[index].disable ? 'bg-transparent border border-0 no-outline text-white' : ''}
                                />
                            </span>

                        </span>
                        <span>
                            <DotIcon height="25" className="mt-2" onClick={() => handleShowTask(task._id)} />
                        </span>

                    </div>

                    {viewTaskDetails.includes(task._id) &&
                        <div className='taskDetails-bg'>
                            <div className='d-flex flex-start p-2'>
                                Completed: {task.completed ? "Completed" : "Not Completed"}
                            </div>
                            <div className='d-flex flex-start p-2'>
                                Created at: {moment(task.createdAt).format('LLLL')}
                            </div>
                            <button className='btn w-100 text-danger bg-danger-subtle' onClick={() => handleDelete(task._id)}>Delete</button>
                        </div>
                    }

                </React.Fragment>
            ))}
        </div>
    )
}
