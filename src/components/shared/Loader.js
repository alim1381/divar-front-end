import React from 'react'
import { PulseLoader } from 'react-spinners'

function Loader() {
  return (
    <div className='w-full flex justify-center items-center'>
        <PulseLoader color="#6366f1" />
    </div>
  )
}

export default Loader