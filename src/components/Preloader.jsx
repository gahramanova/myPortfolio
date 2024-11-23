import React from 'react'
import {  ClimbingBoxLoader } from 'react-spinners'

const Preloader = () => {
  return (

        <div style={{height:"100vh", backgroundColor:"#000"}} className='d-flex align-items-center justify-content-center'> <ClimbingBoxLoader  visible={true}
        color="#8750F7"
        ariaLabel="revolving-dot-loading"/>

  </div>
  
  )
}

export default Preloader