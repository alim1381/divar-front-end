import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

function PrivetePages({Component}) {
    const {user} = useSelector(state => state.userState)
  if (user) {
    return Component
  } else {
    return <Navigate to={'/login'} />
  }
}

export default PrivetePages