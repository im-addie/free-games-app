import React from 'react'
import './Screenshots.css'

function Screenshots(props) {
  
  const {
    screenshot
  } = props

  return (
    <div className='screenshots'>
      <img src={screenshot}/>
    </div>
  )
}

export default Screenshots