import axios from 'axios'
import { useState } from "react";

import PlusIcon from '../assets/icons/PlusIcon'

export default function TaskCreator({getAllTasks}) {
    const [text, setText] = useState('');
    
    
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await axios.post(`https://mern-to-do-list-9xqh.onrender.com/createTask`, {
            task: text,
            completed: false
        });
        if (res.status === 200) {
            getAllTasks();
            setText('')
        }
        } catch (error) {
        }
    
    };

    const handleOnChangeText = (e) => {
        setText(e.target.value);
    };

return (
    <form onSubmit={handleSubmit}>
        <div className='d-flex justify-content-between bg-white'>
        <input type='text' value={text} placeholder='Add new task' className='p-2 rounded border border-light w-100' onChange={(e) => handleOnChangeText(e)} />
        <button type='submit'>
            <PlusIcon height="25" className="m-2 p-1 bg-warning-subtle" />
        </button>
        </div>
    </form>
  )
}
