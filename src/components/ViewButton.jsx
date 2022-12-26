import React from 'react'
import {Link} from 'react-router-dom'

function ViewButton() {
  
  return (
    <div className='flex flex-col items-center card glass p-10 bg-base-100 hover:bg-base-100'>
    <h2 className='text-center text-4xl mb-4 font-semibold'>To view Astronomy Pic of the Day</h2>
    <Link className='btn btn-primary' to={"\PicturePage"}>Click Here</Link>
    </div>
  )
}

export default ViewButton