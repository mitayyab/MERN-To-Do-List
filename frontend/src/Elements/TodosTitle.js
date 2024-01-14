import React from 'react'

import ChevronIcon from '../assets/icons/ChevronIcon'
import ListIcon from "../assets/icons/ListIcon"

export default function TodosTitle({setViewAllTasks, viewAllTasks}) {

  return (
    <div className='d-flex justify-content-between list-title p-2 rounded text-white mt-4'>
        <span>
            <ListIcon height="25" className="m-2" />
            Your todos
        </span>
        <span>
            <ChevronIcon height="15" className="mt-3" onClick={() => setViewAllTasks(!viewAllTasks)} />
        </span>
    </div>
  )
}
