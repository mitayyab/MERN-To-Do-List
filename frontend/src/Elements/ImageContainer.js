import React from 'react'

import profile from '../assets/images/profile.jpg'

export default function ImageContainer() {
  return (
    <div className="mb-5">
        <img src={profile} alt="Profile" height='100 px' width='100 px' className='rounded-circle border border-3'></img>
    </div>
  )
}
