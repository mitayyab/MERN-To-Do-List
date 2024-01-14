import React, { useEffect, useState } from 'react'
import axios from 'axios'

import "./App.css"
import ImageContainer from './Elements/ImageContainer'
import TaskCreator from './Elements/TaskCreator'
import TodosTitle from './Elements/TodosTitle'
import TaskList from './Elements/TaskList'


export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [viewAllTasks, setViewAllTasks] = useState(true);
  const [taskStates, setTaskStates] = useState([]);

  useEffect(() => {
    getAllTasks()
  }, []);

  const getAllTasks = async () => {
    const res = await axios.get(`https://mern-to-do-list-9xqh.onrender.com/getAllTasks`);
    setTaskList(res.data.allTasks);
    const initialTaskStates = res.data.allTasks.map((task) => ({
      disable: true,
      editedText: task.task,
    }));
    setTaskStates(initialTaskStates);
  };

  return (
    <div className='bg-image d-flex align-items-center '>
      <div className='container d-flex justify-content-center flex-column align-items-center'>
        <ImageContainer />
        <div className='text-center todo-width'>
          <TaskCreator getAllTasks={getAllTasks} />
          <TodosTitle setViewAllTasks={setViewAllTasks} viewAllTasks={viewAllTasks} />

          {viewAllTasks &&
            <TaskList taskList={taskList} getAllTasks={getAllTasks} taskStates={taskStates} setTaskStates={setTaskStates}/>
          }

        </div>
      </div>

    </div>
  )
}
