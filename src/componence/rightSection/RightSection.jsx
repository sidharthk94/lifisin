import React from 'react'
import RightTop from './rightTop/RightTop'
import RightNav from './rightNav/RightNav'
import RightMainContent from './rightMainContent/RightMainContent'

const RightSection = () => {
  return (
    <div style={{width:"100%"}}>
        <RightTop/>
        <RightNav/>
        <RightMainContent/>
    </div>
  )
}

export default RightSection