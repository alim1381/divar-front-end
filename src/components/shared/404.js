import React from 'react'
import Err from '../../assets/404.svg'

function Error404() {
  return (
    <div className='w-full flex justify-center items-center'>
        <img className=' w-40' src={Err} alt="404" />
    </div>
  )
}

export default Error404